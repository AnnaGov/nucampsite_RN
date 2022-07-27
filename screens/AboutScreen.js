import { ScrollView, Text } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import { useState } from "react";

const Mission = () => {
  return (
    <Card wrapperStyle={{ margin: 20 }}>
      <Card.Title>Our Mission</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
};

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);

  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
        {partners.map((partners) => {
          return (
            <ListItem key={partners.id}>
              <Avatar source={partners.image} rounded />
              <ListItem.Content>
                <ListItem.Title>{partners.name}</ListItem.Title>
                <ListItem.Subtitle>{partners.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
