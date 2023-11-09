import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    searchAndFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFA451',
        padding: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    sort: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFA451',
        padding: 10,
    },
});