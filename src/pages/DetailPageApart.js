// DetailPageApart.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import ListItem from "../components/ListItem/ListItemApart";
import SubwayIcon from "../assets/images/SubwayIcon.svg";
import BusIcon from "../assets/images/BusIcon.svg";
import Map from "../components/Map/Map1";

const DetailPageApart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `http://3.35.10.79:8080/realEstate/property/list`,
        {
          headers: headers,
        }
      );
      console.log("선택한 아파트", response.data.result.content[0]);
      const item = response.data.result.content[0];
      setSelectedItem(item);
      localStorage.setItem("userInfo", item.user.userId);
      setIsLiked(item.isLiked);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const handleInquiry = () => {
    if (!selectedItem) return;
    navigate(`/chatroom?id=${selectedItem.address.addressId}`, {
      state: { createMember: selectedItem.id },
    });
  };

  const handleContract = () => {
    if (!selectedItem) return;
    navigate(`/contract?id=${selectedItem.id}`);
  };

  const handleToggleLike = async () => {
    if (!selectedItem || !selectedItem.propertyId) {
      console.error("선택된 항목이 올바르게 정의되지 않았습니다.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const url = `http://3.35.10.79:8080/realEstate/property/wish/${selectedItem.propertyId}`;
      console.log("좋아요 상태 토글을 위한 URL:", url);

      if (!isLiked) {
        await axios.post(
          url,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("좋아요 상태를 토글하는 중 오류 발생:", error);
    }
  };

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StyledImage src={selectedItem.imageUrls} alt="Property" />

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
      >
        <div
          className="info"
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <h1 style={{ margin: 0 }}>{selectedItem.price}</h1>
          <p style={{ margin: 0, marginLeft: "5px" }}> /1주 </p>
        </div>
      </div>

      <p style={{ margin: 0, marginLeft: "25px" }}>
        최소 1주 이상부터 계약가능
      </p>
      <hr />

      <div className="property-info" style={{ marginLeft: "20px" }}>
        <h3>매물 정보</h3>
      </div>
      <div
        className="info"
        style={{
          alignItems: "center",
          color: "grey",
          marginLeft: "30px",
        }}
      >
        <p>평수: {selectedItem.area1}평</p>
        <p>
          방/욕실: {selectedItem.roomCount}개/{selectedItem.bathroomCount}개
        </p>
        <p>층수: {selectedItem.floor}</p>
        <p>주차: {selectedItem.parkingAvailable ? "가능" : "불가능"}</p>
        <p>입주 가능 날짜: {selectedItem.startDate}</p>
        <p>엘리베이터 유무: {selectedItem.hasElevator ? "있음" : "없음"}</p>
      </div>

      <hr />

      <div className="manage" style={{ marginLeft: "20px" }}>
        <h3>관리비</h3>
        <p
          style={{
            alignItems: "center",
            color: "grey",
            marginLeft: "15px",
          }}
        >
          {selectedItem.managementFee}원{" "}
        </p>
      </div>
      <hr />

      <div className="description" style={{ marginLeft: "20px" }}>
        <h3>상세 설명</h3>
        <p
          style={{
            alignItems: "center",
            color: "grey",
            marginLeft: "17px",
          }}
        >
          {selectedItem.propertyCondition.parkingMemo}
        </p>
      </div>

      <hr />

      <div className="nearby-facilities" style={{ marginLeft: "20px" }}>
        <h3>주변 생활 시설</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "80px",
            marginLeft: "18px",
          }}
        >
          <div style={{ textAlign: "center", marginRight: "10px" }}>
            <img
              src={SubwayIcon}
              alt="Subway Icon"
              style={{ width: "37px", height: "50px" }}
            />
            <p
              style={{
                marginTop: "1px",
                fontSize: "12px",
                color: "#ECCCB1",
              }}
            >
              {selectedItem.propertyCondition.subwayTime}km
            </p>
          </div>
          <div style={{ textAlign: "center", marginRight: "10px" }}>
            <img
              src={BusIcon}
              alt="Bus Icon"
              style={{ width: "46px", height: "50px", marginLeft: "10px" }}
            />
            <p
              style={{
                marginTop: "1px",
                fontSize: "12px",
                color: "#ECCCB1",
                marginLeft: "10px",
              }}
            >
              {selectedItem.propertyCondition.busTime}km
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div
        className="location-map"
        style={{ marginLeft: "20px", marginBottom: "200px" }}
      >
        <h3>위치</h3>
        <MapContainer>
          <Map />
        </MapContainer>
      </div>

      <hr />

      <div className="similar-listings" style={{ marginLeft: "20px" }}>
        <h3>비슷한 매물 더보기</h3>
        <ListItem />
      </div>

      <hr />

      <InquiryContractContainer
        style={{ marginBottom: "20px", marginLeft: "20px" }}
      >
        <FaHeart
          style={{
            fontSize: "24px",
            color: isLiked ? "red" : "gray",
            marginRight: "8px",
            marginTop: "4px",
            cursor: "pointer",
          }}
          onClick={handleToggleLike}
        />
        <InquiryButton style={{ marginRight: "10px" }}>
          <StyledButton1 onClick={handleInquiry}>문의하기</StyledButton1>
        </InquiryButton>
        <ContractButton style={{ marginRight: "10px" }}>
          <StyledButton2 onClick={handleContract}>계약하기</StyledButton2>
        </ContractButton>
      </InquiryContractContainer>
    </div>
  );
};

export default DetailPageApart;

const MapContainer = styled.div`
  width: 100%; /* 가로 전체 길이를 사용하거나 원하는 크기로 설정하세요 */
  height: 20px; /* 세로 높이를 지정하세요 */
`;

const InquiryContractContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const InquiryButton = styled.div`
  width: 48%;
`;

const ContractButton = styled.div`
  width: 48%;
`;

const StyledButton1 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #d99e73;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledButton2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5e4017;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

const SmallGrayText = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
  padding: 2px 0;
`;
