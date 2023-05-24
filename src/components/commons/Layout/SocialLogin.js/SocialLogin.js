import { useEffect } from "react";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import Image from "next/image";

import { css } from "@emotion/styled";

import { REST_API_KEY, KAKAO_REDIRECT_URL } from '@/OAuth/kakao.js';
import { CALLBACK_URL } from '@/OAuth/naver.js';

export default function SocialLogin() {
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=9dd98e572c5ca5fb5da7011d9ef2f27f&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?client_id=NvJntlXGqc8teHynzWCI&state=9kgsGTfH4j7IyAkg&redirect_uri=${CALLBACK_URL}&response_type=code`;
  const onKaKaoHandler = async () => {
    try {
      window.location.href = KAKAO_AUTH_URI;
    }
    catch (error) {
      console.log(error);
    }
  }

  const onNaverHandler = async () => {
    try {
      window.location.href = NAVER_AUTH_URI;
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Box>
      <Text>Trip'yle 가 처음이신가요?</Text>
      <Button>
        <LinkUp href='/auth/join'>Sign Up</LinkUp>
      </Button>
    </Box>
    <Box>
      <span>⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</span>
      <Text> SNS 로그인 </Text>
      <span>⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</span>
    </Box>
    <Box>
      <SocialImg
        onClick={onNaverHandler}
      >
        <StyledImage src="/assets/naver.png" alt="naver" width="45" height="45"/>
      </SocialImg>
      <SocialImg
        onClick={onKaKaoHandler}
      >
        <StyledImage src="/assets/kakao.png" alt="kakao" width="45" height="45" />
      </SocialImg>
      </Box>
    </>
  );
}


const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.7rem;
`

const LinkUp = styled.a`
  text-decoration: none;
  color: #C8B6FF;
`;

const Text = styled.span`
  color: #666666;
  margin: 0 20px;
  font-size: 13px;
  letter-spacing: -1px;
  line-height: 250%;
`;

const Button = styled.button`
  border: 2.5px solid #C8B6FF;
  border-radius: 5px;
  background-color: white;
  color: #C8B6FF;

  padding: 7px 15px;
  margin: 0 20px;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover{
    border: 2.5px solid #9D7DFF;
  }
`

const SocialImg = styled.div`
  margin: 0 50px;
  cursor: pointer;
`

const StyledImage = styled(Image)`
  border-radius: 50px;
`