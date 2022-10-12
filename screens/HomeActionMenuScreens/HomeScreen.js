import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import DropDownPicker from "react-native-dropdown-picker";
import AppointmentCard from "../../Components/Appointments/AppointmentCard";
const HomeScreen = () => {
  const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Leg Day", value: "leggs" },
    { label: "Chest Day", value: "chest" },
    { label: "Arms Day", value: "arms" },
    { label: "Shoulder Day", value: "shoulder" },
    { label: "Back Day", value: "back" },
  ]);
  return (
    <ScrollView
      style={{
        flex: 1,
        // backgroundColor: "#FCFCFC",
        padding: 20,
      }}
      contentContainerStyle={{ justifyContent: "space-between" }}
    >
      <View>
        <Text
          style={{ fontFamily: "BebasNeue", fontSize: 30, marginBottom: 20 }}
        >
          Upcoming Appointments
        </Text>
        <AppointmentCard></AppointmentCard>
        <AppointmentCard></AppointmentCard>

        <Text
          style={{
            fontFamily: "BebasNeue",
            fontSize: 30,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Workout Detail
        </Text>
        <DropDownPicker
          style={{ marginBottom: 20 }}
          maxHeight={500}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
        />

        {new Array(5).fill(0).map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: "#B0C929",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "MontserratM",
                  fontSize: 16,
                  color: "white",
                }}
              >
                Bench press (6 reps x 4 sets)
              </Text>
            </View>
          );
        })}
      </View>
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
        style={{ borderRadius: 5, marginVertical: 30 }}
      ></Calendar>
    </ScrollView>
  );
};

export default HomeScreen;
