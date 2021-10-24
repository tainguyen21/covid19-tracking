import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [report, setReport] = useState([]);

  const handleOnChange = (e, value) => {
    if (value) setSelectedCountry(value.Slug);
  };

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
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
    <div>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={countries.find((item) => item.Slug === selectedCountry)}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
