import { Container, Typography } from "@mui/material";
import { sortBy } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import "moment/locale/vi";
import "@fontsource/roboto";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [report, setReport] = useState([]);

  const handleOnChange = (e, value) => {
    if (value) setSelectedCountry(value.Slug);
  };

  useEffect(() => {
    getCountries().then((res) => {
      const sortedCountry = sortBy(res.data, "Country");
      setCountries(sortedCountry);
      setSelectedCountry("vietnam");
    });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      getReportByCountry(selectedCountry).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountry]);

  return (
    <Container style={{ paddingTop: "32px" }}>
      <Typography variant="h3" component="h2">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={countries.find((item) => item.Slug === selectedCountry)}
      />
      <Highlight report={report} />
      <Summary
        report={report}
        selectedCountry={countries.find(
          (item) => item.Slug === selectedCountry
        )}
      />
    </Container>
  );
}

export default App;
