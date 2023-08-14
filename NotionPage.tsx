import ParseError from "./utils/error";
import BlocksView from "./render/blocks";


export default function NotionPageData({
	list
}) {
	if (list.object !== 'list' || list.results === undefined) {
		return (
			<ParseError
			/>
		);
	}

	return (
		<>
			<BlocksView
				blocks={list.results}
			/>
		</>
	);
}
