console.log("Pragnesh's form");
/**************************************************************************************************************************************
 ELELEMENTS
 **************************************************************************************************************************************/
const form = document.getElementById("form1");
let firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const Day = document.getElementById("Day");
const Month = document.getElementById("Month");
const Year = document.getElementById("Year");
const City = document.getElementById("City");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobileNumber");
const gender = document.getElementById("gender");
const Address = document.getElementById("Address");
const pc = document.getElementById("pc");
const State = document.getElementById("State");
const Country = document.getElementById("Country");
const Board10 = document.getElementById("Board10");
const Board12 = document.getElementById("Board12");
const BoardG = document.getElementById("BoardG");
const BoardM = document.getElementById("BoardM");
const Percentage10 = document.getElementById("Percentage10");
const Percentage12 = document.getElementById("Percentage12");
const PercentageG = document.getElementById("PercentageG");
const PercentageM = document.getElementById("PercentageM");
const YOP10 = document.getElementById("YOP10");
const YOP12 = document.getElementById("YOP12");
const YOPG = document.getElementById("YOPG");
const YOPM = document.getElementById("YOPM");

/************************************************************************************************************************************
                                                    ELELEMENT VALUES
 *************************************************************************************************************************************/

let firstNameVal = document.getElementById("firstName").value;
let lastNameVal = document.getElementById("lastName").value;
let DayVal = document.getElementById("Day").value;
let MonthVal = document.getElementById("Month").value;
let YearVal = document.getElementById("Year").value;
let CityVal = document.getElementById("City").value;
let emailVal = document.getElementById("email").value;
let mobileNumberVal = document.getElementById("mobileNumber").value;
let AddressVal = document.getElementById("Address").value;
let pcVal = document.getElementById("pc").value;
let StateVal = document.getElementById("State").value;
let CountryVal = document.getElementById("Country").value;
let Board10Val = document.getElementById("Board10").value;
let Board12Val = document.getElementById("Board12").value;
let BoardGVal = document.getElementById("BoardG").value;
let BoardMVal = document.getElementById("BoardM").value;
let Percentage10Val = document.getElementById("Percentage10").value;
let Percentage12Val = document.getElementById("Percentage12").value;
let PercentageGVal = document.getElementById("PercentageG").value;
let PercentageMVal = document.getElementById("PercentageM").value;
let YOP10Val = document.getElementById("YOP10").value;
let YOP12Val = document.getElementById("YOP12").value;
let YOPGVal = document.getElementById("YOPG").value;
let YOPMVal = document.getElementById("YOPM").value;

/***************************************************************************************************************************************
                                                      ERROR ELELEMENTS
 ***************************************************************************************************************************************/
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const DayError = document.getElementById("DayError");
const MonthError = document.getElementById("MonthError");
const YearError = document.getElementById("YearError");
const CityError = document.getElementById("CityError");
const emailError = document.getElementById("emailError");
const mobileNumberError = document.getElementById("mobileNumberError");
const AddressError = document.getElementById("AddressError");
const pce = document.getElementById("pce");
const StateError = document.getElementById("StateError");
const CountryError = document.getElementById("CountryError");
let HE = document.getElementById("HE");
const BE10 = document.getElementById("BE10");
const BE12 = document.getElementById("BE12");
const BEG = document.getElementById("BEG");
const BEM = document.getElementById("BEM");
const PE10 = document.getElementById("PE10");
const PE12 = document.getElementById("PE12");
const PEG = document.getElementById("PEG");
const PEM = document.getElementById("PEM");
const YOPE10 = document.getElementById("YOPE10");
const YOPE12 = document.getElementById("YOPE12");
const YOPEG = document.getElementById("YOPEG");
const YOPEM = document.getElementById("YOPEM");
const courses = document.getElementsByName("COURSES");
/************************************************************************************************************************************              
                                                       Event listeners
*************************************************************************************************************************************/
firstName.addEventListener("input", (e) => {
  if (firstName.value.length == 0) {
    firstNameError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-zA-Z]+)$/;
    if (pattern.test(firstName.value)) {
      firstNameError.innerHTML = "";
    } else {
      firstNameError.innerHTML =
        "<span style=color:red;>**Non-Characters are not valid</span>";
    }
  }
});
lastName.addEventListener("input", (e) => {
  if (lastName.value.length == 0) {
    lastNameError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-zA-Z]+)$/;
    if (pattern.test(lastName.value)) {
      lastNameError.innerHTML = "";
    } else {
      lastNameError.innerHTML =
        "<span style=color:red;>**Non-Characters are not valid</span>";
    }
  }
});
Day.addEventListener("input", (e) => {
  if (Day.value < 1 || Day.value == "") {
    Day.value = "";
  }
  if (Day.value > 31 || Day.value < 1 || Day.value === "Day") {
    DayError.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    DayError.innerHTML = "";
  }
});
Month.addEventListener("input", (e) => {
  if (Month.value !== "month") {
    MonthError.innerHTML = "";
  } else {
    MonthError.innerHTML = "<span style=color:red;>Invalid</span>";
  }
});
Year.addEventListener("input", (e) => {
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(Year.value)) {
    YearError.innerHTML = "";
  } else {
    YearError.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
email.addEventListener("input", (e) => {
  if (email.value.length === 0) {
    emailError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,8})$/;
    if (pattern.test(email.value)) {
      emailError.innerHTML = "";
    } else {
      emailError.innerHTML =
        "<span style=color:red;>**Please valid Enter input</span>";
    }
  }
});
mobileNumber.addEventListener("input", (e) => {
  if (mobileNumber.value.length === 0) {
    mobileNumberError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([0-9]+)$/;
    if (mobileNumber.value.length === 10 && pattern.test(mobileNumber.value)) {
      mobileNumberError.innerHTML = "";
    } else {
      mobileNumberError.innerHTML =
        "<span style=color:red;>**Please Enter 10 Degits</span>";
    }
  }
});
Address.addEventListener("input", (e) => {
  if (Address.value.length == 0) {
    AddressError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    AddressError.innerHTML = "";
  }
});
City.addEventListener("input", (e) => {
  if (City.value.length == 0) {
    CityError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-zA-Z]+)$/;
    if (pattern.test(City.value)) {
      CityError.innerHTML = "";
    } else {
      CityError.innerHTML =
        "<span style=color:red;>**Non-Characters are not valid</span>";
    }
  }
});
pc.addEventListener("input", (e) => {
  if (pc.value.length < 6) {
    pce.innerHTML = "<span style=color:red;>**Enter 6 Digits</span>";
  } else {
    var pattern = /^([0-9]+)$/;
    if (pattern.test(pc.value)) {
      pce.innerHTML = "";
    } else {
      pce.innerHTML = "<span style=color:red;>**Input must be 6 digits</span>";
    }
  }
});
State.addEventListener("input", (e) => {
  if (State.value.length == 0) {
    StateError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-zA-Z]+)$/;
    if (pattern.test(State.value)) {
      StateError.innerHTML = "";
    } else {
      StateError.innerHTML =
        "<span style=color:red;>**Non-Characters are not valid</span>";
    }
  }
});
Country.addEventListener("input", (e) => {
  if (Country.value.length == 0) {
    CountryError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    var pattern = /^([a-zA-Z]+)$/;
    if (pattern.test(Country.value)) {
      CountryError.innerHTML = "";
    } else {
      CountryError.innerHTML =
        "<span style=color:red;>**Non-Characters are not valid</span>";
    }
  }
});
let Others = document.getElementById("Others");
let TextBox = document.getElementById("TextBox");
let hobbies = document.getElementsByName("HOBBIES");
function myFunction() {
  location.reload();
}
Others.addEventListener("click", (e) => {
  if (Others.checked === true) {
    TextBox.style.display = "block";
  } else {
    TextBox.style.display = "none";
    HE.innerHTML = "";
  }
});
TextBox.addEventListener("input", () => {
  if (Others.checked) {
    if (TextBox.value.length === 0) {
      HE.innerHTML = "<span style=color:red;>**Please Enter Other value</span>";
    } else {
      HE.innerHTML = "";
    }
  }
});
Board10.addEventListener("input", (e) => {
  var pattern = /^([a-zA-Z]+)$/;
  if (pattern.test(Board10.value)) {
    BE10.innerHTML = "";
  } else {
    BE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
Board12.addEventListener("input", (e) => {
  var pattern = /^([a-zA-Z]+)$/;
  if (pattern.test(Board12.value)) {
    BE12.innerHTML = "";
  } else {
    BE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
BoardG.addEventListener("input", (e) => {
  var pattern = /^([a-zA-Z]+)$/;
  if (pattern.test(BoardG.value)) {
    BEG.innerHTML = "";
  } else {
    BEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
BoardM.addEventListener("input", (e) => {
  var pattern = /^([a-zA-Z]+)$/;
  if (pattern.test(BoardM.value)) {
    BEM.innerHTML = "";
  } else {
    BEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
Percentage10.addEventListener("input", (e) => {
  var pattern = /^([0-9]{1,2})$/;
  if (pattern.test(Percentage10.value)) {
    PE10.innerHTML = "";
  } else {
    PE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
Percentage12.addEventListener("input", (e) => {
  var pattern = /^([0-9]){1,2}$/;
  if (pattern.test(Percentage12.value)) {
    PE12.innerHTML = "";
  } else {
    PE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
PercentageG.addEventListener("input", (e) => {
  var pattern = /^([0-9]){1,2}$/;
  if (pattern.test(PercentageG.value)) {
    PEG.innerHTML = "";
  } else {
    PEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
PercentageM.addEventListener("input", (e) => {
  var pattern = /^([0-9]){1,2}$/;
  if (pattern.test(PercentageM.value)) {
    PEM.innerHTML = "";
  } else {
    PEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
YOP10.addEventListener("input", (e) => {
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(YOP10.value)) {
    YOPE10.innerHTML = "";
  } else {
    YOPE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
YOP12.addEventListener("input", (e) => {
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(YOP12.value)) {
    YOPE12.innerHTML = "";
  } else {
    YOPE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
YOPG.addEventListener("input", (e) => {
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(YOPG.value)) {
    YOPEG.innerHTML = "";
  } else {
    YOPEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});
YOPM.addEventListener("input", (e) => {
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(YOPM.value)) {
    YOPEM.innerHTML = "";
  } else {
    YOPEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
});

/*************************************************************************************************************************
                                              EVENTLISTENER ON SUBMIT
 *************************************************************************************************************************/

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  /**********************************************************************************************************************
                                                    Check Errors 
  ***********************************************************************************************************************/
  firstNameVal = document.getElementById("firstName").value;
  lastNameVal = document.getElementById("lastName").value;
  DayVal = document.getElementById("Day").value;
  MonthVal = document.getElementById("Month").value;
  YearVal = document.getElementById("Year").value;
  CityVal = document.getElementById("City").value;
  emailVal = document.getElementById("email").value;
  genderVal = document.getElementById("email").value;
  mobileNumberVal = document.getElementById("mobileNumber").value;
  AddressVal = document.getElementById("Address").value;
  pcVal = document.getElementById("pc").value;
  StateVal = document.getElementById("State").value;
  CountryVal = document.getElementById("Country").value;
  Board10Val = document.getElementById("Board10").value;
  Board12Val = document.getElementById("Board12").value;
  BoardGVal = document.getElementById("BoardG").value;
  BoardMVal = document.getElementById("BoardM").value;
  Percentage10Val = document.getElementById("Percentage10").value;
  Percentage12Val = document.getElementById("Percentage12").value;
  PercentageGVal = document.getElementById("PercentageG").value;
  PercentageMVal = document.getElementById("PercentageM").value;
  YOP10Val = document.getElementById("YOP10").value;
  YOP12Val = document.getElementById("YOP12").value;
  YOPGVal = document.getElementById("YOPG").value;
  YOPMVal = document.getElementById("YOPM").value;

  if (firstNameVal.length === 0) {
    e.preventDefault();
    firstNameError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    firstNameError.innerHTML = "";
  }
  if (lastNameVal.length === 0) {
    e.preventDefault();
    lastNameError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    lastNameError.innerHTML = "";
  }
  if (DayVal > 31 || DayVal <= 1 || DayVal === "Day") {
    e.preventDefault();
    DayError.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    DayError.innerHTML = "";
  }
  if (MonthVal === "month") {
    e.preventDefault();
    MonthError.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    MonthError.innerHTML = "";
  }
  var pattern = /^([0-9])([0-9])([0-9])([0-9])$/;
  if (pattern.test(YearVal)) {
    YearError.innerHTML = "";
  } else {
    e.preventDefault();
    YearError.innerHTML = "<span style=color:red;>**Invalid</span>";
  }
  if (emailVal.length === 0) {
    e.preventDefault();
    emailError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    emailError.innerHTML = "";
  }
  if (mobileNumberVal.length === 0) {
    e.preventDefault();
    mobileNumberError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    mobileNumberError.innerHTML = "";
  }
  if (CityVal.length === 0) {
    e.preventDefault();
    CityError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    CityError.innerHTML = "";
  }
  if (AddressVal.length === 0) {
    e.preventDefault();
    AddressError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    AddressError.innerHTML = "";
  }
  if (pcVal.length !== 6) {
    e.preventDefault();
    pce.innerHTML = "<span style=color:red;>**Please 6 digits</span>";
  } else {
    pce.innerHTML = "";
  }
  if (StateVal.length === 0) {
    e.preventDefault();
    StateError.innerHTML = "<span style=color:red;>**Please Enter input</span>";
  } else {
    StateError.innerHTML = "";
  }
  if (CountryVal.length === 0) {
    e.preventDefault();
    CountryError.innerHTML =
      "<span style=color:red;>**Please Enter input</span>";
  } else {
    CountryError.innerHTML = "";
  }
  if (Others.checked === true && TextBox.value.length === 0) {
    e.preventDefault();
    TextBox.style.display = "block";
  } else {
    TextBox.style.display = "none";
    HE.innerHTML = "";
  }
  if (Board10Val.length === 0) {
    e.preventDefault();
    BE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    BE10.innerHTML = "";
  }
  if (Board12Val.length === 0) {
    e.preventDefault();
    BE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    BE12.innerHTML = "";
  }
  if (BoardGVal.length === 0) {
    e.preventDefault();
    BEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    BEG.innerHTML = "";
  }
  if (BoardMVal.length === 0) {
    e.preventDefault();
    BEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    BEM.innerHTML = "";
  }
  if (Percentage10Val.length === 0) {
    e.preventDefault();
    PE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    PE10.innerHTML = "";
  }
  if (Percentage10Val.length === 0) {
    e.preventDefault();
    PE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    PE10.innerHTML = "";
  }
  if (Percentage12Val.length === 0) {
    e.preventDefault();
    PE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    PE12.innerHTML = "";
  }
  if (PercentageGVal.length === 0) {
    e.preventDefault();
    PEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    PEG.innerHTML = "";
  }
  if (PercentageMVal.length === 0) {
    e.preventDefault();
    PEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    PEM.innerHTML = "";
  }
  if (YOP10Val.length === 0) {
    e.preventDefault();
    YOPE10.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    YOPE10.innerHTML = "";
  }
  if (YOP12Val.length === 0) {
    e.preventDefault();
    YOPE12.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    YOPE12.innerHTML = "";
  }
  if (YOPGVal.length === 0) {
    e.preventDefault();
    YOPEG.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    YOPEG.innerHTML = "";
  }
  if (YOPMVal.length === 0) {
    e.preventDefault();
    YOPEM.innerHTML = "<span style=color:red;>**Invalid</span>";
  } else {
    YOPEM.innerHTML = "";
  }
  /****************************************************************************************************************************************
                                                    Objects to get Data from Form
  *****************************************************************************************************************************************/
  
  let obj = {};
  obj.firstName = firstNameVal;
  obj.lname = lastNameVal;
  obj.day = DayVal;
  obj.month = MonthVal;
  obj.Year = YearVal;
  obj.email = emailVal;
  obj.mnumber = mobileNumberVal;
  obj.gender = document.querySelector('input[name="gender"]:checked').id;  
  obj.hobbies=[];
  //For Hobbies
  for (hb of hobbies){
      obj.hobbies.push(hb.id)
  }
  if(Others.checked){ //if other checked then add value of other to hobbies object.
    obj.hobbies.push(TextBox.value)
    obj.hobbies.pop()
    
    if (TextBox.value.length===0){
      e.preventDefault()
      HE.innerHTML = "<span style=color:red;>**Please Enter Others value</span>"
    }
    else{
      HE.innerHTML = ""
    }
  }

  obj.Address = AddressVal;
  obj.city = CityVal;
  obj.pc = pcVal;
  obj.state = StateVal;
  obj.CountryVal;

  obj.Board = {
    "Class 10": Board10Val,
    "Class 12": Board12Val,
    Graduation: BoardGVal,
    Masters: BoardMVal,
  };
  obj.percentage = {
    "Class 10": Percentage10Val,
    "Class 12": Percentage12Val,
    Graduation: PercentageGVal,
    Masters: PercentageMVal,
  };
  obj.yop = {
    "Class 10": YOP10Val,
    "Class 12": YOP12Val,
    Graduation: YOPGVal,
    Masters: YOPMVal,
  };
  obj.courses = document.querySelector('input[name="COURSES"]:checked').id;
});
/****************************************************************************************************************************
 ***************************************************************************************************************************
 *                                  
 *                                                     END OF CODE
 * 
 ***************************************************************************************************************************
 ****************************************************************************************************************************/