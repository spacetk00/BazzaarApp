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
        marginBottom: 30,
        alignContent: 'center',
        marginHorizontal: 8,
        shadowColor: 'black',
        shadowOffset: .1,
    },
    title: {
        color: 'black',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
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
        display: 'flex',
        backgroundColor: 'orange',
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 20,
        alignContent: 'stretch',
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
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        
    },
    blocoTexto: {
        width: '50%',
        flex: 1,
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
        height: '20%',
        flexDirection: 'row',
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 20,
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    subContainer: {
        marginVertical: 4,
        flexDirection: 'row',
    },
    redeImg: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    pagamentoImg: {
        width: 25,
        height: 15,
        marginRight: 5,
    },
    bloco: {
        width: '50%',
        padding: 10,
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