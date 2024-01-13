//Airtable
import Airtable from "airtable";
const REACT_APP_AIRTABLE_KEY =
  "patSZRseX65C1LSIH.b1ce0ab9e005b0b7dceaaf8d71b5175259c994c12f5978e22b8ab05d0cf988b6";
const REACT_APP_AIRTABLE_ID = "appaEoxVED4PmnrAW";

const apiKey = REACT_APP_AIRTABLE_KEY;
const baseId = REACT_APP_AIRTABLE_ID;

const edgyBase = new Airtable({ apiKey: apiKey }).base(baseId);

export default edgyBase;
