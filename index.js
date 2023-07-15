const { parse } = require('csv-parse/sync');
const fs = require('fs');

const transform = (row, keys) => {
  const transformed = {};
  Object.keys(keys).forEach((key) => {
    transformed[key] = row[keys[key]];
  });
  return transformed;
};

let counties = {};

const csvConfig = {
  columns: true,
  skip_empty_lines: true
}

const acs2010 = parse(fs.readFileSync('./data/acs/2010.csv', 'utf8'), csvConfig);
const acs2020 = parse(fs.readFileSync('./data/acs/2020.csv', 'utf8'), csvConfig);

const census2010 = parse(fs.readFileSync('./data/census/2010.csv', 'utf8'), csvConfig);
const census2020 = parse(fs.readFileSync('./data/census/2020.csv', 'utf8'), csvConfig);

const acsPopulationKeys = {
  id: 'GEO_ID',
  name: 'NAME',
  total: 'B01003_001E',
};

const censusPopulationKeys2010 = {
  id: 'GEO_ID',
  name: 'NAME',
  total: 'P001001',
};

const censusPopulationKeys2020 = {
  id: 'GEO_ID',
  name: 'NAME',
  total: 'P1_001N',
};

//removing header row
acs2010.shift();
acs2020.shift();
census2010.shift();
census2020.shift();

// ACS 2010
acs2010.forEach((row) => {
  const { id, name, total } = transform(row, acsPopulationKeys);
  counties[id] = {
    id,
    name,
    total,
    acs2010: total,
    acs2020: 0,
    census2010: 0,
    census2020: 0,
  };
});

// ACS 2020
acs2020.forEach((row) => {
  const { id, total } = transform(row, acsPopulationKeys);
  if (!counties[id]) return;
  counties[id].acs2020 = total;
});

// Census 2010
census2010.forEach((row) => {
  const { id, total } = transform(row, censusPopulationKeys2010);
  if (!counties[id]) return;
  counties[id].census2010 = total;
});

// Census 2020
census2020.forEach((row) => {
  const { id, total } = transform(row, censusPopulationKeys2020);
  if (!counties[id]) return;
  counties[id].census2020 = total;
});

const shouldHaveKeys = ['acs2010', 'acs2020', 'census2010', 'census2020'];
Object.keys(counties).forEach((key) => {
  if (shouldHaveKeys.every((k) => counties[key][k] === 0)) {
    delete counties[key];
  } else {
    counties[key].diffACS = counties[key].acs2020 - counties[key].acs2010;
    counties[key].diffCensus = counties[key].census2020 - counties[key].census2010;

    counties[key].diffACSPercent = counties[key].diffCensus / counties[key].diffACS;
    counties[key].off2020 = counties[key].acs2020 - counties[key].census2020;
  }
});

fs.writeFileSync('./view/data/counties.json', JSON.stringify(counties, null, 2));