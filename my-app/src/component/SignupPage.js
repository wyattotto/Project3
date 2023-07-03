import { Stack } from "@chakra-ui/react"
import MenteeLogin from "./MenteeLogin"
import MentorLogin from "./MentorLogin"

export const SignupPage = ()=>{
    return <Stack direction={'column'}>
      
    <MenteeLogin />
    <MentorLogin />
  </Stack>
}