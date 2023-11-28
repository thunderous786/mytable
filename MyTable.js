import { View, Text, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const MyTable = ({
  heading,
  header,
  data,
  fontSize,
  borderWidth,
  borderStyle,
  borderColor,
  width,
  height,
  margin,
  bgColor,
  bgHeadColor,
}) => {
  return (
    <View>
      <Text style={{ fontSize: fontSize }}>{heading}</Text>
      <Table
        style={{ width: width, backgroundColor: bgColor }}
        borderStyle={{ borderWidth: borderWidth, borderColor: borderColor }}
      >
        <Row data={header} style={{ backgroundColor: bgHeadColor }} />
        <Rows data={data} />
      </Table>
    </View>
  );
};

export default MyTable;
