import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { AuthBtn } from "./components/AuthBtn";
import { RoutesComponent } from "./components/RoutesComponent";
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

const App = () => {
	const [nftList, setNftList] = useState([]);
	const { user } = useMoralis()
	const { account } = useMoralisWeb3Api()

	useEffect(() => {
		const nftCount = async () => { 
			let nfts = await (await account.getNFTs({ chain: "eth", address: user.attributes.ethAddress })).result
			console.log(nfts)
			setNftList(nfts)
		}
		(user && account) && nftCount()
	},[user, account])

	return (
		<Router>
			<AuthBtn />
			<Gallery nftList = { nftList }/>
			{/* <RoutesComponent /> */}
		</ Router>
	);
}

const readMetadata = ( nft ) => { return JSON.parse(nft.metadata) }

const formatIPFS = ( img ) => { return img.replace("ipfs://", "https://gateway.ipfs.io/ipfs/")}

const Gallery = ({ nftList }) => {

	return (
		<div>
			<h1>Gallery</h1>
			{nftList.map((nft, i) => {
				console.log(readMetadata(nft))
				let { image } = readMetadata(nft)
				return (
					<div key={ i }>
						name: { nft.name }
						<img style = {{ maxWidth:"100px", maxHeight:"100px" }} src = { formatIPFS(image) } alt = { nft.name } />
					</div>
				)
			})}
		</div>
	)
}


export default App;