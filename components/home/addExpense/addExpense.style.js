import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  modifyItem:{
    flexDirection: 'row', 
    borderBlockColor:'#ccc', 
    borderBottomWidth:1, 
    paddingBottom:8, 
    marginBottom:25
  },
  itemTitle:{
    marginRight:150
  },
  // checklist
  checklist:{
    paddingTop: 80,
    paddingHorizontal:20,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
