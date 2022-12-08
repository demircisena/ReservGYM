import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Member, MemberInfo, Spacing, HeaderBar } from "../../components";
import styles from "./style";
import { LinearButton } from "../../components/";
import colorPalette from "../../themes/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { spacing } from "../../configs";

const MemberProfile = ({ navigation }) => {
  return (
    <>
      <HeaderBar title={"Member Profile"} exit onClickHandler={() => navigation.navigate("Login")} onClickBackHandler={() => navigation.goBack()} />
      <View style={styles.main}>
        <Spacing spacing={spacing.xs} />
        <Member style={styles.member} />
        <Spacing spacing={spacing.s} />
        <MemberInfo />
        <View style={styles.buttonLinearContainer}>
          <View style={styles.buttonLinear}>
            <LinearButton
              colors={[colorPalette.lightRed, colorPalette.darkRed]}
              title={"Rezervasyonlarım"}
              onClickHandler={() => navigation.navigate("Reservation")}
            />
          </View>
          <View style={styles.buttonLinear}>
            <LinearButton
              colors={[colorPalette.lightRed, colorPalette.darkRed]}
              title={"Ödeme Yap"}
              onClickHandler={() => navigation.navigate("PaymentScreen")}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("QrCodeScreen")}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colorPalette.lightRed, colorPalette.darkRed]} style={styles.buttonCircular}>
            <Text style={{ color: colorPalette.white, fontWeight: "bold" }}>
              <Icon name="camera" size={30} />
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MemberProfile;
