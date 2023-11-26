import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    
  },
  
  pieChartimageDisplay:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    bottom:50
  },
  lineGraphimageDisplay:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    bottom:50
  },
  overviewDisplay: {
    textAlign: 'center',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 80,
    marginBottom: 40,
  },
  
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  pieBtn: {
    width: 50,
    height: "10%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    left:280,
    bottom:10
  },
  lineBtn: {
    width: 50,
    height: "10%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    left:330,
    bottom:61
  },
  pieChartIconImage: {
    width: "80%",
    height: "80%"
  },
  lineGraphIconImage: {
    width: "80%",
    height: "80%"
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
