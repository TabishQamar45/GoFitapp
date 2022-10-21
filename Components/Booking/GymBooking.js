import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import DropDownPicker from "react-native-dropdown-picker";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const GymBooking = () => {
  const { DynamicStyles } = useDynamicStyling();
  const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"));
  const [openTrainer, setOpenTrainer] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  //
  const [openTimeslot, setOpenTimeslot] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{ color: "white", fontWeight: "bold", marginBottom: 10 }}>
        Available Trainers
      </Text>
      <DropDownPicker
        placeholder="Select Trainer"
        dropDownContainerStyle={{
          backgroundColor: "#292d3e",
        }}
        style={{
          backgroundColor: "#292d3e",
        }}
        textStyle={{
          color: "white",
        }}
        listMode="SCROLLVIEW"
        open={openTrainer}
        value={value}
        items={items}
        setOpen={setOpenTrainer}
        setValue={setValue}
        setItems={setItems}
      />
      <Calendar
        minDate={moment().subtract(40, "days").calendar()}
        maxDate={moment().add(10, "days").calendar()}
        onDayPress={(day) => {
          console.log(day.dateString);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "#B0C929",
            selectedTextColor: "white",
            dotColor: "white",
            marked: true,
          },
        }}
        theme={{
          arrowColor: "#B0C929",
          todayTextColor: "#B0C929",
        }}
        style={{
          borderRadius: DynamicStyles(5),
          marginVertical: DynamicStyles(30),
        }}
      ></Calendar>
      <Text style={{ color: "white", fontWeight: "bold", marginBottom: 10 }}>
        Available Time Slots
      </Text>
      <DropDownPicker
        placeholder="Select Time"
        dropDownContainerStyle={{
          backgroundColor: "#292d3e",
        }}
        style={{
          backgroundColor: "#292d3e",
        }}
        textStyle={{
          color: "white",
        }}
        listMode="SCROLLVIEW"
        open={openTimeslot}
        value={value}
        items={items}
        setOpen={setOpenTimeslot}
        setValue={setValue}
        setItems={setItems}
      />
      <TouchableOpacity
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B0C929",
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Confirm Appointment
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GymBooking;

const styles = StyleSheet.create({});
