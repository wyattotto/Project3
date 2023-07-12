import { Stack } from "@chakra-ui/react"
import MenteeLogin from "../components/MenteeLogin"
import MentorLogin from "../components/MentorLogin"

export const SignupPage = ()=>{
    return <Stack direction={'column'}>
      
    <MenteeLogin />
    <MentorLogin />
  </Stack>
}