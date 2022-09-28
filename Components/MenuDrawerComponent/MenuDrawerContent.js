import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, ICONS } from "../../constants/Constants";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const CustomDrawerItem = ({ label, icon }) => {
  const { DynamicStyles } = useDynamicStyling();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: DynamicStyles(8),
        alignItems: "center",
      }}
    >
      <Image
        source={icon}
        style={{
          width: DynamicStyles(15),
          height: DynamicStyles(15),
          tintColor: "#000000",
          marginRight: DynamicStyles(10),
        }}
      />
      <Text
        style={{
          fontFamily: "MontserratR",
          fontWeight: "500",
          fontSize: RFValue(14, 667),
          color: "#303841",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function MenuDrawerContent({ navigation }) {
  const { DynamicStyles } = useDynamicStyling();

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: DynamicStyles(20) }}>
        {/*Close Button Section*/}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={ICONS.close}
              style={{
                height: DynamicStyles(15),
                width: DynamicStyles(15),
                tintColor: "#000000",
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}

        <TouchableOpacity
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            marginVertical: DynamicStyles(15),
          }}
          onPress={() => console.log("Pressed!")}
        >
          <Image
            source={ICONS.ellipse}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "DM_SansB",
                fontWeight: "500",
                fontSize: RFValue(20, 700),
                textAlign: "center",
                width: "100%",
              }}
            >
              Sophia !
            </Text>
            <Text
              style={{
                fontFamily: "MontserratR",
                fontWeight: "500",
                fontSize: RFValue(14, 700),
                color: "#3A4750",
                textAlign: "center",
              }}
            >
              Basic member
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer Items */}
        <View style={{ flex: 1, marginTop: DynamicStyles(5) }}>
          <CustomDrawerItem icon={ICONS.dashboard} label={"DashBoard"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.plans} label={"Plans"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.dumble} label={"Training"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.categories} label={"Categories"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.myaccount} label={"My Account"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.heart} label={"My Favorites"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.settings} label={"App Settings"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <CustomDrawerItem icon={ICONS.support} label={"Contact Support"} />
          <View
            style={{
              borderBottomColor: "#E9ECEF",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <View style={{ marginTop: DynamicStyles(70) }}>
            <CustomDrawerItem icon={ICONS.signout} label={"Sign Out"} />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
export default MenuDrawerContent;
