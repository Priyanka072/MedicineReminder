import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../screens/CustomHeader';
import FAQ from '../screens/FAQ';
import { COLORS } from '../assets/Colors';
import { TermsOfServies } from '../screens/TermsOfServices';
import { PrivacyPolicies } from '../screens/PrivacyPolicies';
import AboutUs from '../screens/AboutUs';
import LogoutScreen from '../screens/Logout';
import Feed from '../screens/Feed';

const Drawer = createDrawerNavigator();

function DrawerScreenForAdmin() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerPressColor: COLORS.bluetouchable,
                drawerActiveBackgroundColor: COLORS.bluetouchable,
                drawerInactiveTintColor: COLORS.black,
                drawerInactiveBackgroundColor: COLORS.grey,
                drawerActiveTintColor: COLORS.white,
                header: (props) => <CustomHeader {...props} />,
            }}
            initialRouteName='Feed'>
            <Drawer.Screen name='Feed' component={Feed}/>
            <Drawer.Screen name='Terms Of Services' component={TermsOfServies} />
            <Drawer.Screen name='Privacy Policy' component={PrivacyPolicies} />
            <Drawer.Screen name='FAQ' component={FAQ} />
            <Drawer.Screen name='About Us' component={AboutUs} />
            <Drawer.Screen name='Log Out' component={LogoutScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerScreenForAdmin

