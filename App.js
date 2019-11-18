import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Picker,
  KeyboardAvoidingView
} from "react-native";
import * as Font from "expo-font";
import RadioBtn from "./components/RadioBtn";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: true,
      choosenIndex: "",
      choosenValue: "",
      choosenIndex1: "",
      choosenValue1: "",
      choosenIndex2: "",
      choosenValue2: "",
      choosenIndex3: "",
      choosenValue3: "",
      myanmar: "",
      english: "",
      pamana: "",
      pamana1: "",
      myanmar1: "",
      english1: "",
      lumyo: "",
      barthar: "",
      education: "",
      latesar: "",
      phone: "",
      email: "",
      kar: "",
      date: "",
      N1: "",
      selectedData: "",
    };
    this.handleOnChangeMyanmar = this.handleOnChangeMyanmar.bind(this);
    this.handleOnChangeEnglish = this.handleOnChangeEnglish.bind(this);
    this.handleOnChangePamana = this.handleOnChangePamana.bind(this);
    this.handleOnChangePamana1 = this.handleOnChangePamana1.bind(this);
    this.handleOnChangeMyanmar1 = this.handleOnChangeMyanmar1.bind(this);
    this.handleOnChangeEnglish1 = this.handleOnChangeEnglish1.bind(this);
    this.handleOnChangeLumyo = this.handleOnChangeLumyo.bind(this);
    this.handleOnChangeBarthar = this.handleOnChangeBarthar.bind(this);
    this.handleOnChangeEducation = this.handleOnChangeEducation.bind(this);
    this.handleOnChangeLateSar = this.handleOnChangeLateSar.bind(this);
    this.handleOnChangePhone = this.handleOnChangePhone.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Pyidaungsu: require("./assets/font/Pyidaungsu.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  handleOnChangeMyanmar(myanmar) {
    this.setState({ myanmar: myanmar });
  }
  handleOnChangeEnglish(english) {
    this.setState({ english: english });
  }
  handleOnChangePamana(pamana) {
    this.setState({ pamana: pamana });
  }
  handleOnChangePamana1(pamana1) {
    this.setState({ pamana1: pamana1 });
  }
  handleOnChangeMyanmar1(myanmar1) {
    this.setState({ myanmar1: myanmar1 });
  }
  handleOnChangeEnglish1(english1) {
    this.setState({ english1: english1 });
  }
  handleOnChangeLumyo(lumyo) {
    this.setState({ lumyo: lumyo });
  }
  handleOnChangeBarthar(barthar) {
    this.setState({ barthar: barthar });
  }

  handleOnChangeEducation(education) {
    this.setState({ education: education });
  }

  handleOnChangeLateSar(latesar) {
    this.setState({ latesar: latesar });
  }

  handleOnChangePhone(phone) {
    this.setState({ phone: phone });
  }

  handleOnChangeEmail(email) {
    this.setState({ email: email });
  }
  handleOnChangeN1(N1) {
    this.setState({ N1: N1 });
  }

  clear() {
    if (this.state.myanmar1 == "") {
      alert("Require father name for myanmar");
    } else if (this.state.english1 == "") {
      alert("Required father name for english");
    } else if (this.state.lumyo == "") {
      alert("Require for Lumyo");
    } else if (this.state.barthar == "") {
      alert("Require for barthar");
    } else {
      alert("sucessfully");
      this._clear();
    }
  }

  _clear() {
    this.setState({
      myanmar: "",
      english: "",
      pamana: "",
      pamana1: "",
      myanmar1: "",
      english1: "",
      lumyo: "",
      barthar: "",
      education: "",
      latesar: "",
      phone: "",
      email: "",
      N1: ""
    });
  }
  changeSelectedData=(value)=>{
    
    this.setState({selectedData:value})
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <KeyboardAvoidingView enabled behavior="padding">
          <ScrollView>
            <View style={styles.MainContainer}>
              <View style={styles.first}>
                <Text style={styles.text}>Home/Register</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  margin: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderColor: "#484046"
                }}
              >
                <Text
                  style={{
                    marginLeft: 28,
              
                    fontSize: 18
                  }}
                >
                  (၁)မှတ်​ပုံတင်​ရန်​ အဆိုပြုသူ
                </Text>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(က) လုပ်ငန်းရှင်</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.myanmar}
                    onChangeText={this.handleOnChangeMyanmar}
                    placeholder="မြန်​မာ"
                  ></TextInput>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.english}
                    onChangeText={this.handleOnChangeEnglish}
                    placeholder="အင်္ဂ​လိပ်"
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>
                    (ခ) နိုင်ငံသားစိစစ်ရေး ကဒ်ပြားအမှတ်
                  </Text>
                </View>

                <View>
                  <Picker
                    style={styles.textInput}
                    selectedValue={this.state.choosenValue}
                    onValueChange={(itemvalue, itemIndex) =>
                      this.setState({
                        choosenValue: itemvalue,
                        choosenIndex: itemIndex
                      })
                    }
                  >
                    <Picker.Item label="၁" value="01" />
                    <Picker.Item label="၂" value="02" />
                    <Picker.Item label="၃" value="03" />
                    <Picker.Item label="၄" value="04" />
                  </Picker>

                  <TextInput
                    style={styles.textInput}
                    value={this.state.pamana}
                    onChangeText={this.handleOnChangePamana}
                    placeholder="ပမန"
                  ></TextInput>
                  <Picker
                    style={styles.textInput}
                    selectedValue={this.state.choosenValue1}
                    onValueChange={(itemvalue, itemIndex) =>
                      this.setState({
                        choosenValue1: itemvalue,
                        choosenIndex1: itemIndex
                      })
                    }
                  >
                    <Picker.Item label="နိုင်" value="01" />
                    <Picker.Item label="nn" value="02" />
                    <Picker.Item label="bb" value="03" />
                    <Picker.Item label="cc" value="04" />
                  </Picker>
                  <TextInput style={styles.textInput} placeholder="NRC" />

                  <Picker
                    style={styles.textInput}
                    selectedValue={this.state.choosenValue2}
                    onValueChange={(itemvalue, itemIndex) =>
                      this.setState({
                        choosenValue2: itemvalue,
                        choosenIndex2: itemIndex
                      })
                    }
                  >
                    <Picker.Item label="1" value="01" />
                    <Picker.Item label="2" value="02" />
                    <Picker.Item label="3" value="03" />
                    <Picker.Item label="4" value="04" />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.pamana1}
                    onChangeText={this.handleOnChangePamana1}
                    placeholder="PaMaNa"
                  ></TextInput>
                  <Picker
                    style={styles.textInput}
                    selectedValue={this.state.choosenValue3}
                    onValueChange={(itemvalue, itemIndex) =>
                      this.setState({
                        choosenValue3: itemvalue,
                        choosenIndex3: itemIndex
                      })
                    }
                  >
                    <Picker.Item label="N" value="01" />
                    <Picker.Item label="nn" value="02" />
                    <Picker.Item label="bb" value="03" />
                    <Picker.Item label="cc" value="04" />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.N1}
                    onChangeText={this.handleOnChangeN1.bind(this)}
                    placeholder="NRC"
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.secondtext}>(ဂ) အဖအမည်*</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.myanmar1}
                    onChangeText={this.handleOnChangeMyanmar1}
                    placeholder="မြန်မာ"
                  ></TextInput>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.english1}
                    onChangeText={this.handleOnChangeEnglish1}
                    placeholder="အင်္ဂလိပ်"
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ဃ) လူမျိုး: *</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.lumyo}
                    onChangeText={this.handleOnChangeLumyo}
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(င) ကိုးကွယ်သည့်ဘာသာ *</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.barthar}
                    onChangeText={this.handleOnChangeBarthar}
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(စ) ပညာအရည်အချင်း</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.education}
                    onChangeText={this.handleOnChangeEducation}
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ဆ) ကျား/မ *</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 30
                  }}
                >
                  <RadioBtn
                   
                    active={this.state.selectedData == "ကျား" ? true : false}
                    onPress={this.changeSelectedData.bind(this, "ကျား")}
                    label="ကျား"
                  />

                 
                  <RadioBtn
                  
                    active={this.state.selectedData == "မ" ? true : false}
                    onPress={this.changeSelectedData.bind(this, "မ")}
                    label="မ"
                  />
                  
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ဇ)မွေးသက္ကရာဇ် *</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="d-m-y"
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(စျ) မြိုနယ်</Text>
                </View>
                <View>
                  <Picker
                    style={styles.textInput}
                    selectedValue={this.state.choosenValue}
                    onValueChange={(itemvalue, itemIndex) =>
                      this.setState({
                        choosenValue: itemvalue,
                        choosenIndex: itemIndex
                      })
                    }
                  >
                    <Picker.Item label="Select Township" value="01" />
                    <Picker.Item label="dd" value="02" />
                    <Picker.Item label="ss" value="03" />
                    <Picker.Item label="ss" value="04" />
                  </Picker>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ည)နေရပ်လိပ်စာ</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.latesar}
                    onChangeText={this.handleOnChangeLateSar}
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ဍ) ဖုန်းနံပါတ်</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.phone}
                    onChangeText={this.handleOnChangePhone}
                    placeholder="ဖုန်းနံပါတ်"
                  ></TextInput>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.secondtext}>(ဌ) အီးမေးလ်</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.email}
                    onChangeText={this.handleOnChangeEmail}
                    placeholder="အီးမေးလ်"
                  ></TextInput>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    width: 300,
                    height: 50,
                    padding: 4,
                    marginTop: 10,
                    marginLeft: 30,
                    borderRadius: 5
                  }}
                  onPress={() => {
                    this.clear();
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      textAlignVertical: "center",
                      marginTop: 10
                    }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },
  text: {
    color: "white",

    margin: 20,
    fontSize: 15
  },
  first: {
    backgroundColor: "green"
    // height: 50
  },
  textInput: {
    borderWidth: 1,
    width: 300,
    height: 50,
    padding: 4,
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 5,
    backgroundColor: "#FAF6F9",
    borderColor: "#484046"
  },
  second: {
    marginTop: 10
  },
  secondtext: {
    marginLeft: 30
  },
  radioContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "blue",
    borderStyle: "solid",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    marginLeft: 10,
    color: "green"
  }
});
