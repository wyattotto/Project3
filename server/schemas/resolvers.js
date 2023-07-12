const { AuthenticationError } = require('apollo-server-express');
const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    reviews: async () => {
      return Review.find({});
    },
    roles: async (parent, args) => {
      return User.find({
        role: args.role
      });
    },
    focuses: async (parent, args) => {
      return User.find({
        focus: args.focus
      });
    },
    abouts: async (parent, args) => {
      return User.find({
        about: args.about
      });
    },
    educations: async (parent, args) => {
      return User.find({
        education: args.education
      });
    },
    whys: async (parent, args) => {
      return User.find({
        why: args.why
      });
    },
    // user: async(parent,args,ctx)=>{
    //   console.log(ctx)
    //   const user = await User.findById(ctx.user._id)
    //   return user
    // }
    // user: async (parent, args, ctx) => {
    //   if (!ctx.user) {
    //     // If there is no user in the context, return null
    //     return null;
    //   }
      
    //   try {
    //     const user = await User.findById(ctx.user._id);
    //     return user;
    //   } catch (error) {
    //     // Handle any potential errors that occur during the database query
    //     console.error('Error retrieving user:', error);
    //     throw new Error('An error occurred while retrieving the user.');
    //   }
    // }
  //   user: async (parent, args, ctx) => {
  // if (!ctx.user) {
  //   // If there is no user in the context, return an empty array
  //   return [];
  // }
  user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id)


      return user;
    }
  
  
}

    
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { reviewText }, context) => {
      if (context.user) {
        const review = await Review.create({
          reviewText,
          reviewAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { review: review._id } }
        );

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addComment: async (parent, { thoughtId, commentText }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $addToSet: {
    //           comments: { commentText, commentAuthor: context.user.username },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    // await User.findOneAndUpdate(
    //   { _id: context.user._id },
    //   { $pull: { thoughts: thought._id } }
    // );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeComment: async (parent, { thoughtId, commentId }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $pull: {
    //           comments: {
    //             _id: commentId,
    //             commentAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};


module.exports = resolvers;