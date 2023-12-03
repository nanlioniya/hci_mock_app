import { 
    Text
} from 'react-native';
import { Link } from 'expo-router';

const Home = () => {    

    return (
        <>
        <Text>Home page</Text>
        <Link href="/overview/Overview">Overview</Link>
        <Link href="/addExpense/AddExpense">AddExpense</Link>
        </>
    );
}

export default Home;