import { View, Text } from 'react-native';
import InformationalComponent from "../../components/InformationalComponent";

export default function StudentPage() {
  return (
    <View style={{ flex: 1}}>
      <Text style={{textAlign: "center" , marginTop: 20, justifyContent: "center",  
        alignItems: "center",}}></Text>
        <View style={{width: "100%", alignItems: "center"}}>
      <InformationalComponent/>
      </View>
    </View>
  );
}