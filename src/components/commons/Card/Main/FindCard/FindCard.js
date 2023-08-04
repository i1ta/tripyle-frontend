import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginState } from "@/States/LoginState";

export default function FindCard(props) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const checkLogin = async () => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스입니다");
      router.push("/auth/signIn");
    } else {
      router.push(`/findTripyler/${props.id}`);
    }
  };

  // 나이 형식 변경
  const [age, setAge] = useState(parseInt(props.info.age));
  const [ageCategory, setAgeCategory] = useState("");
  useEffect(() => {
    if (0 <= age % 10 && age % 10 <= 3) {
      setAgeCategory("초반");
    } else if (4 <= age % 10 && age % 10 <= 6) {
      setAgeCategory("중반");
    } else {
      setAgeCategory("후반");
    }
  }, [age]);

  // 시간 형식 변경
  const formatTime = () => {
    const today = new Date();
    const timeValue = new Date(props.info.regDateTime);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };
  const [timeFormat, setTimeFormat] = useState(
    formatTime(props.info.regDateTime)
  );

  return (
    <ReviewCard onClick={checkLogin}>
      <ReviewImgWrapper>
        <ReviewImg
          src={
            props.info.imageUrl === null
              ? "/img/defaultImg.png"
              : props.info.imageUrl
          }
        ></ReviewImg>
      </ReviewImgWrapper>
      <ReviewCardHeader>
        <ReviewInfo>
          <CountryWrapper>
            <ReviewIcon src="/icon/location.png"></ReviewIcon>
            <ReviewInfoTxt>{props.info.nationName}</ReviewInfoTxt>
          </CountryWrapper>
          <ReviewCity> · {props.info.regionName}</ReviewCity>
        </ReviewInfo>
      </ReviewCardHeader>

      <ReviewUserWrapper>
        <ReviewUser>
          <ReviewInfoUserWrapper>
            <ReviewUserImg
              src={props.info.profileUrl || "/icon/defaultProfile.png"}
            ></ReviewUserImg>
            <ReviewUserInfoWrapper>
              <ReviewUsername>{props.info.nickname}</ReviewUsername>
              <ReviewAge>
                {parseInt(age / 10) * 10 < 10
                  ? "아동"
                  : `${parseInt(age / 10) * 10}대`}{" "}
                {parseInt(age / 10) * 10 >= 10 && ageCategory}{" "}
                {props.info.gender === "M" ? "남성" : "여성"}
              </ReviewAge>
            </ReviewUserInfoWrapper>
          </ReviewInfoUserWrapper>
          <ReviewInfoCol>
            <ReviewInfoWrapper>
              <ReviewIcon src="/icon/user.png"></ReviewIcon>
              <ReviewSmallTxt>
                {props.info.totalPeopleNum - props.info.recruitPeopleNum - 1}인
                모집 중 / 총 {props.info.totalPeopleNum}인
              </ReviewSmallTxt>
            </ReviewInfoWrapper>
            <ReviewInfoWrapper style={{ "margin-bottom": "5px" }}>
              <ReviewIcon src="/icon/calendar.png"></ReviewIcon>
              <ReviewDateTxt>
                <ReviewSmallTxt>
                  {props.info.startDate.substring(2).replace("-", ".")}
                </ReviewSmallTxt>
                <ReviewDateLine></ReviewDateLine>
                <ReviewSmallTxt>
                  {props.info.endDate.substring(2).replace("-", ".")}
                </ReviewSmallTxt>
              </ReviewDateTxt>
            </ReviewInfoWrapper>
          </ReviewInfoCol>
        </ReviewUser>
      </ReviewUserWrapper>
      <ReviewLine></ReviewLine>
      <ReviewCardContents>
        <ReviewCardContentsTitle>
          {props.info.title.length < 20
            ? props.info.title
            : props.info.title.substring(0, 21) + "..."}
        </ReviewCardContentsTitle>
        <ReviewHashTagWrapper>
          {props.info.hashtag.map((element, idx) => {
            if (0 <= idx && idx < 4) {
              return <ReviewHashTag>#{element}</ReviewHashTag>;
            }
          })}
        </ReviewHashTagWrapper>
      </ReviewCardContents>
      <ReviewCardFooter>
        <ReviewReactWrapper>
          <ReviewCardTime>{timeFormat}</ReviewCardTime>
          <ReviewReactContent>
            <ReviewReactIcon src="/icon/heart.png"></ReviewReactIcon>
            <ReviewReactTxt>{props.info.likes}</ReviewReactTxt>
            <ReviewReactIcon src="/icon/comment.png"></ReviewReactIcon>
            <ReviewReactTxt>{props.info.comments}</ReviewReactTxt>

            <ReviewReactIcon src="/icon/views.png"></ReviewReactIcon>
            <ReviewReactTxt>{props.info.hits}</ReviewReactTxt>
          </ReviewReactContent>
        </ReviewReactWrapper>
      </ReviewCardFooter>
    </ReviewCard>
  );
}

const ReviewCard = styled.div`
  width: 335px;
  height: 453px;
  background: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ReviewImgWrapper = styled.div`
  width: 335px;
  height: 200px;
`;

const ReviewImg = styled.img`
  width: 335px;
  height: 200px;
  margin-bottom: 20px;
  object-fit: cover;
`;

const ReviewCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 295px;
  margin-bottom: 14px;
  margin-top: 15px;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;

const ReviewInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

const ReviewInfoTxt = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 1;
  color: #666666;
`;

const ReviewSmallTxt = styled(ReviewInfoTxt)`
  font-size: 10px;
`;

const ReviewCity = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: #000000;
  margin-left: 10px;
`;

const ReviewInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

const ReviewDateTxt = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewDateLine = styled.div`
  width: 4px;
  height: 0.7px;
  background-color: #666666;
  margin: 0px 4px;
`;

const ReviewUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 3px;
  margin: 0 3px 5px 3px;
  width: 335px;
`;

const ReviewUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  width: 335px;
`;

const ReviewInfoUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 8px;
  object-fit: cover;
`;

const ReviewUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewUsername = styled.div`
  color: #c8b6ff;
  font-size: 10px;
`;

const ReviewAge = styled.div`
  color: #666666;
  font-size: 10px;
`;

const ReviewHashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 8px;
`;

const ReviewHashTag = styled.button`
  height: 25px;
  padding: 3px 12px;
  margin-right: 8px;
  margin-top: 5px;
  background: #00b4d8;
  border-radius: 30px;

  font-weight: 500;
  font-size: 10px;
  color: #ffffff;
  white-space: nowrap;
`;

const ReviewLine = styled.div`
  width: 295px;
  height: 1px;
  background-color: #d6d6d6;
  margin-bottom: 8px;
`;

const ReviewCardContents = styled.div`
  width: 295px;
  height: 80px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #333333;
`;

const ReviewCardContentsTitle = styled.div`
  color: #9ab3f5;
  font-size: 15px;
  font-weight: bold;
  margin: 8px 0;
`;

const ReviewCardContentsContent = styled.div`
  color: #333333;
  font-size: 12;
  line-height: 15px;
`;

const ReviewCardFooter = styled.div`
  width: 295px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid rgba(214, 214, 214, 0.3);
`;

const ReviewCardTime = styled.div`
  color: #666666;
  font-size: 10px;
`;

const ReviewReactContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`;

const ReviewReactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewReactIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

const ReviewReactTxt = styled.div`
  width: 25px;
  margin: 0 2px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1;
  color: #666666;
`;

const ReviewReactMsgTxt = styled(ReviewReactTxt)`
  margin-right: 23px;
`;

const ReviewDetailBtn = styled.button`
  width: 62px;
  height: 24px;
  background: #9ab3f5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewDetailBtnTxt = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  color: #ffffff;
`;

const BtnArrow = styled.img``;
