import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  modifyContainer:{
    flexDirection: 'row',
    marginBottom:25,
    marginStart: 60,
    marginTop:25
  },
  modifyItem:{
    borderBlockColor:'#ccc',
    borderBottomWidth:1,
    marginStart: 20,
    paddingLeft:100,
    paddingRight:100
  },
  itemTitle:{
    fontSize: 15,
  },
  // checklist
  checklist:{
    paddingTop: 80,
    paddingHorizontal:20,
  }
});

export default styles;
