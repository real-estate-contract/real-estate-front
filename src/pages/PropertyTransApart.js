import React, { useState } from "react";
import ListItem from "../components/ListItem/ListItem";
import Map from "../components/Map/Map";
import ListItemApart from "../components/ListItem/ListItemApart";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import axios from "axios";

export default function PropertyTransApart() {
  const [showFilters, setShowFilters] = useState(false);
  const [dealType, setDealType] = useState("전체");
  const [deposit, setDeposit] = useState([0, 1000]);
  const [monthlyRent, setMonthlyRent] = useState([0, 100]);
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [salesPrice, setSalesPrice] = useState([0, 1000000]);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleDealTypeChange = (type) => {
    setDealType(type);
  };

  const handleDepositChange = (event, newValue) => {
    setDeposit(newValue);
  };

  const handleMonthlyRentChange = (event, newValue) => {
    setMonthlyRent(newValue);
  };

  const handleMaintenanceToggle = () => {
    setIncludeMaintenance(!includeMaintenance);
  };

  const handleSalesPriceChange = (event, newValue) => {
    setSalesPrice(newValue);
  };

  const handleResetFilters = () => {
    setDeposit([0, 1000]);
    setMonthlyRent([0, 100]);
    setIncludeMaintenance(false);
    setSalesPrice([0, 1000000]);
  };

  const handleApplyFilters = () => {
    setFiltersApplied(true);
    setShowFilters(false);
    // Apply filters logic...
  };

  const handleSearch = () => {
    if (filtersApplied) {
      const searchParams = {
        dealType,
        deposit,
        monthlyRent,
        includeMaintenance,
        salesPrice,
      };
    }
  };

  return (
    <div>
      <div style={{ display: "flex", position: "relative" }}>
        <input type="text" placeholder="검색어를 입력하세요"></input>
        <button
          onClick={handleToggleFilters}
          style={{ position: "absolute", right: "0" }}
        >
          필터
        </button>
        <button onClick={handleSearch}>검색</button>
      </div>
      {showFilters && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {/* 필터 추가 */}
          <div>거래 유형</div>
          <div>
            <button onClick={() => handleDealTypeChange("전체")}>전체</button>
            <button onClick={() => handleDealTypeChange("전세")}>전세</button>
            <button onClick={() => handleDealTypeChange("월세")}>월세</button>
            <button onClick={() => handleDealTypeChange("매매")}>매매</button>
          </div>
          {/* 필터 추가 */}
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <Button variant="outlined" onClick={handleResetFilters}>
              초기화
            </Button>{" "}
            <Button variant="contained" onClick={handleApplyFilters}>
              적용하기
            </Button>
          </div>
        </div>
      )}
      <Map />
      <ListItemApart />
    </div>
  );
}
