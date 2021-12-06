import { StyleSheet } from "react-native";

const header = StyleSheet.create({
    background: {
        backgroundColor: '#444444',
        padding: 15,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#F9F9F9',
        textAlign: 'center',
    }
});

const banner = StyleSheet.create({
    bannerContainer:{
        marginTop: 30,
        marginHorizontal: 20,
        height: 230,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    textSmall: {
        fontSize: 12,
        position: 'relative',
        left: '45%',
        top: '25%',
        color: '#F9F9F9',
    },
    botao: {
        position: 'relative',
        left: '52%',
        top: '30%',
        backgroundColor: '#E95E3F',
        width: 70,
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white', 
        textAlign: 'center',
        fontSize: 10,
        textTransform: 'uppercase',
    }
});

const blocoProduto = StyleSheet.create({
    container: {
        marginVertical: '5%',
        alignContent: 'center',
        marginHorizontal: 8,
        shadowColor: 'black',
        shadowOffset: .1,
    },
    title: {
        alignSelf: 'center',
        width: '50%',
        color: 'black',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        elevation: 10
    },
    subContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    imagem: {
        flex: 1,
        width: 80,
        height: 150,
        resizeMode: 'cover',
    },
    textSmall: {
        color: 'black',
        textAlign: 'center',
        fontSize: 9,
    },
});

const sobre = StyleSheet.create({
    container: {
        width: '90%',
        height: '35%',
        flexDirection: 'row',
        marginTop: '5%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#F9F9F9',
        marginBottom: 5,
    },
    texto: {
        textAlign: 'left',
        color: '#F9F9F9',
        fontSize: 8,
    },
    textoC: {
        textAlign: 'center',
        marginVertical: 5,
        color: '#F9F9F9',
        fontSize: 8,
    },
    textoSpan: {
        justifyContent: 'flex-end',
        color: '#E95E3F',
    },
    imagem: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    blocoTexto: {
        width: '50%',
        backgroundColor: '#444444',
        padding: 10,
    },
    blocoImagem: {
        width: '50%',
    },
});

const extra = StyleSheet.create({
    container: {
        width: '90%',
        height: '30%',
        alignContent: 'center',
        marginVertical: '5%',
        elevation: 5
    },
    title: {
        alignSelf: 'center',
        width: '50%',
        color: 'black',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        elevation: 10
    },
    subContainer: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pagamentoBtn: {
        width: '15%',
        height: '70%',
        alignItems: 'center',
        marginHorizontal: '2%'
    },
    pagamentoImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
});

const page = StyleSheet.create({
    container: {
        padding: 10,
        color: 'black',
        alignItems: 'center',
    },
    botaoVoltar:{
        backgroundColor: '#E95E3F',
        
        padding: 5,
        margin: 10,
    },
    textoBotao:{
        color: '#F9F9F9',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    containerImagem:{
        height: '70%',
        width: '50%',
    },
    imagem: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    textoDescricao: {
        fontWeight: 'bold',
        color: 'black',
    },
    textoDestaque: {
        color: 'orangered',
    },
});

export {header, banner, blocoProduto, sobre, extra, page};