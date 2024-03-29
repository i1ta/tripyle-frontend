import FindCard from "@/components/commons/Card/MyCollections/FindCard";
import styled from "@emotion/styled";

export const MyCollectionsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

export const CollectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 90%;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const CollectionTitle = styled.h1`
  font-size: 36px;
  color: #9AB3F5;
  margin-bottom: 30px;
  margin-right: 30px;
`;


export const CollectionWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border: 2.5px solid #6179B6;
    border-radius: 15px;
    background-color: white;

    height: 800px;
    width: 1000px;

    font-size: 20px;s
`;

export const CollectionContentTitleWrapper = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #6179B6;
`;

export const CollectionContentTitleLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 80px;
`;

export const CollectionContentTitleRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export const CollectionContentYearIcon = styled.img`
  width: 16px;
  height: 17px;
  
  margin: 0 20px;
  margin-top: 19px;
  cursor:pointer;
`;

export const CollectionContentYear = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #6179B6;
`;

export const CollectionContentIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 20px;
`;

export const CollectionContentCategoryIcon = styled(CollectionContentIcon)`
  width: 36px;
  height: 25px;
  margin-top: 0;
  margin-right: 30px;
  margin-left: 0;
  cursor: pointer;
`;

export const CollectionContentTitle = styled.div`
  height: 100%;
  width: 200px;
  color: #6179B6;
  justify-content: center;
  margin-top: 18px;

  padding: 12px;
  cursor: pointer;
  font-weight: bold;

  font-size: ${(props) => 
    props.selected === true ? "24px" : "20px"
  };

  color: ${(props) => 
    props.selected === true ? "#6179B6" : "#D9D9D9"
  };
`;

export const CollectionContentLine = styled.div`
  height: 30px;
  width: 2px;
  background-color: #6179B6;
`;

export const CollectionContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;

  justify-content: center;
  padding-top: 10px;
  padding-bottom: 50px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px; /* 스크롤바 너비 설정 */
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const CollectionFindCard = styled(FindCard)`
  width: 266px;
  height: 280px;
`;

export const CollectionContentListWrapper = styled.div`
  width: 880px;
  height: 80px;
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);

  margin-top: 30px;
`;