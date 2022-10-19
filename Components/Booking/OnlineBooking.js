import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import SelectDropdown from "react-native-select-dropdown";
import BigYellowButton from "../BigYellowButton";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses } from "../../reducers/UserReducer";
import axios from "axios";
import _ from "lodash";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);
const location = [
  {
    id: "0",
    title: "HeadQuarters",
  },
  {
    id: "1",
    title: "Yorkville",
  },
];
const INITIAL_DATE = "2021-08-28";

const Valet = (props) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [timeSlots, setTimeSlots] = useState([]);
  const [timeSlotDisplay, setTimeSlotDisplay] = useState();
  const [vehicleId, setVehicleId] = useState();
  const [vehicleName, setVehicleName] = useState();
  const [serviceLocation, setServiceLocation] = useState();
  const [serviceLocationName, setServiceLocationName] = useState();
  const [pickUpLocationId, setPickUpLocationId] = useState();
  const [pickupLocationName, setPickupLocationName] = useState();
  const [dropOffLocationId, setDropOffLocationId] = useState();
  const [dropoffLocationName, setDropoffLocationName] = useState();
  const [bookingSlotId, setBookingSlotId] = useState();
  const [appointmentId, setAppointmentId] = useState(
    _.get(props, "route.params.propData.appointment.id")
  );
  const [description, setDescription] = useState();
  const [calendarId, setCalendarId] = useState();
  const [productId, setProductId] = useState();

  const [confirmationData, setConfirmationData] = useState({
    month: "",
    day: "",
    startTime: "",
    endTime: "",
    vehicle: "",
    pickUpAddress: "",
    dropOffAddress: "",
  });


  useFocusEffect(
    useCallback(() => {
      console.log("Props in valet", props);
      // if (_.get(props, "route.params.propData.propData" != {})) {
      // console.log("Runs first Time");

      setVehicleId(_.get(props, "route.params.propData.appointment.vehicleId"));
      setTimeSlotDisplay(_.get(props, "route.params.timeSlot"));
      setVehicleName(_.get(props, "route.params.propData.vehicle.model"));
      setBookingSlotId(
        _.get(props, "route.params.propData.appointment.bookingSlotId")
      );
      setServiceLocation(
        _.get(props, "route.params.propData.appointment.serviceLocation")
      );
      setServiceLocationName(
        _.get(props, "route.params.propData.appointment.serviceLocation") === 0
          ? "HeadQuarters"
          : _.get(
              props,
              "route.params.propData.appointment.serviceLocation"
            ) === 1
          ? "YorkVille"
          : "Select Location"
      );
      setPickUpLocationId(
        _.get(props, "route.params.propData.appointment.pickupAddressId")
      );
      setDropOffLocationId(
        _.get(props, "route.params.propData.appointment.pickupAddressId")
      );
      setAppointmentId(_.get(props, "route.params.propData.appointment.id"));

      setPickupLocationName(_.get(props, "route.params.pickUpAddress"));
      setDropoffLocationName(_.get(props, "route.params.dropOffAddress"));
      setSelected(
        moment(
          _.get(
            props,
            "route.params.propData.appointment.scheduledStart",
            "2021-09-15"
          )
        ).format("YYYY-MM-DD")
      );
      setConfirmationData((prevState) => ({
        ...prevState,
        dropOffAddress: _.get(props, "route.params.dropOffAddress"),
        pickUpAddress: _.get(props, "route.params.pickUpAddress"),
        vehicle:
          _.get(props, "route.params.propData.vehicle.year") +
          _.get(props, "route.params.propData.vehicle.make"),
        startTime: moment(
          _.get(props, "route.params.propData.bookingSlot.start")
        ).format("hh:mm a"),
        endTime: moment(
          _.get(props, "route.params.propData.bookingSlot.end")
        ).format("hh:mm a"),
        day: moment(
          _.get(props, "route.params.propData.bookingSlot.start")
        ).format("DD"),
        month: moment(
          _.get(props, "route.params.propData.bookingSlot.start")
        ).format("MMMM"),
      }));
      // }
      return () => {
        // console.log("setting everything to null in valet ");
        setVehicleName("");
        setVehicleId("");
        setAppointmentId("");
        setServiceLocationName("");
        setServiceLocation("");
        setPickupLocationName("");
        setPickUpLocationId("");
        setDropOffLocationId("");
        setDropoffLocationName("");
        setTimeSlotDisplay("");
        setTimeSlots("");
        setBookingSlotId("");
        // props.navigation.setParams({
        //   propData: {},
        //   timeSlot: "",
        //   pickUpAddress: "",
        //   dropOffAddress: "",
        // });
      };
    }, [_.get(props, "route.params.propData")])
  );

  /////////////// Getting Booking Slots From Redux /////////

  const availableBookingSlots = useSelector((state) => {
    return _.get(state, "User.bookingSlots", []);
  });

  /////////////Getting Booking Slots From Redux ///////////

  /////////// Getting Token From  Redux ///////////////////

  const appToken = useSelector((state) => {
    return _.get(state, "User.token");
  });

  /////////// Getting Token From  Redux ///////////////////

  //////////////// Getting Addresses for customer  /////////////
  var getAddressConfig = {
    method: "get",
    url: `https://test.alphashine.ca/api/app/addresses?CustomerId=${loggedInCustomerID}`,
    headers: {
      Authorization: `Bearer ${appToken}`,
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    axios(getAddressConfig)
      .then((res) => {
        // console.log("getting Addresses array is  ", res.data.items);
        dispatch(setAddresses(res.data.items));
      })
      .catch((err) => {
        console.log("error in getting Address ", err);
      });
  }, []);
  ///////////////// Getting Addresses for customer ///////////////

  ///////////////// Adding  Valet Appointments //////////////////

  var addAppointmentData = JSON.stringify({
    serviceLocation: serviceLocation,
    sku: "string",
    requestedFinish: "2021-09-22T05:42:43.977Z",
    valetRequested: true,
    userCancelled: false,
    tentative: true,
    status: 0,
    calendarId: "39fde262-17d6-7415-f381-07662796ae59",
    customerId: loggedInCustomerID,
    // pickupAddressId: "39feffd7-327d-cac6-c829-c1e39b67045e",
    pickupAddressId: pickUpLocationId,
    // dropoffAddressId: "39feffd7-327d-cac6-c829-c1e39b67045e",
    dropoffAddressId: dropOffLocationId,
    productId: "39fddd57-f01f-d5d4-0bf3-8966dd029200",
    bookingSlotId: bookingSlotId,
    vehicleId: vehicleId,
  });



  ///////////////// Adding  Valet Appointments ///////////////

  const [dictState, setDictState] = useState({});
  useEffect(() => {
    // console.log("available booking slots", availableBookingSlots)
    const dict = {};
    availableBookingSlots.map((item) => {
      const key = moment(_.get(item, "bookingSlot.start")).format("YYYY-MM-DD");
      // console.log("Key is ", key);
      if (key in dict) {
        dict[key] = [...dict[key], _.get(item, "bookingSlot")];
      } else {
        dict[key] = [_.get(item, "bookingSlot")];
      }
    });
    // console.log(" dict", dict);
    setDictState(dict);
  }, [availableBookingSlots]);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22,
          paddingHorizontal: 13,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 14,
            color: "#FFFFFF",
          }}
        >
          Membership Services Left
        </Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 21,
            backgroundColor: "#FFBF35E5",
            borderRadius: 71,
            borderWidth: 1,
            borderColor: "#575757",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "black",
            }}
          >
            Convert Services
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ paddingHorizontal: 13, marginBottom: 23 }}>
        <FlatList
          data={membershipServicesLeft}
          renderItem={renderItemMembership}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View> */}
      <View style={{ paddingHorizontal: 13 }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: "white",
            lineHeight: 17.07,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Location
        </Text>
        <SelectDropdown
          data={location}
          onSelect={(selectedItem, index) => {
            setServiceLocation(_.get(selectedItem, "id"));
            console.log("service location id", _.get(selectedItem, "id"));
          }}
          defaultButtonText={
            serviceLocationName ? serviceLocationName : "Select Location"
          }
          buttonTextAfterSelection={(selectedItem, index) => {
            return _.get(selectedItem, "title");
          }}
          rowTextForSelection={(item, index) => {
            return _.get(item, "title");
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={() => {
            return (
              <Image
                source={require("../../assets/Images/downArrow.png")}
                style={{
                  height: 6,
                  width: 11,
                }}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: "white",
            lineHeight: 17.07,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Date & Time
        </Text>
        <Calendar
          minDate={Object.keys(dictState)[0]}
          maxDate={Object.keys(dictState)[Object.keys(dictState).length - 1]}
          onDayPress={(day) => {
            console.log("selected day", day);
            setTimeSlots(dictState[day.dateString]);
            setSelected(day.dateString);
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "#D09B29",
              selectedTextColor: "white",
            },
          }}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            paddingBottom: 5,
            marginBottom: 20,
          }}
        ></Calendar>

        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: "white",
            lineHeight: 17.07,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Additional Notes
        </Text>
        <TextInput
          multiline={true}
          placeholder="Enter Notes Here"
          placeholderTextColor="#3F3F3F"
          style={{
            backgroundColor: "#C4C4C480",
            color: "white",
            width: "100%",
            borderRadius: 10,
            height: 80,
            fontSize: 20,
            padding: 10,
            paddingTop: 12,
            marginBottom: 20,
          }}
        ></TextInput>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 16,
            color: "white",
            marginBottom: 10,
          }}
        >
          Estimated Time of Completion:
        </Text>
        <BigYellowButton
          onPress={() => {
            onContinuePress(
              confirmationData,
              addAppointmentData,
              appointmentId
            );
          }}
          buttonStyle={{
            alignSelf: "center",
            width: "100%",
            marginBottom: 20,
          }}
          textStyle={{ color: "#FFFFFF" }}
          title={
            loading ? (
              <ActivityIndicator color="white"></ActivityIndicator>
            ) : (
              "Continue"
            )
          }
        ></BigYellowButton>
      </View>
    </ScrollView>
  );
};

export default Valet;
const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: "100%",
    height: 60,
    backgroundColor: "#C4C4C480",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "white", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#000000", borderRadius: 5 },
  dropdown1RowStyle: {
    backgroundColor: "#C4C4C480",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left", color: "white" },
});
