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
        borderBottomWidth: .5,
        borderBottomColor: '#00000020',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFA451',
        padding: 10,
        marginRight: 10,
        height: 45,
    },
    input: {
        flex: 1,
    },
});