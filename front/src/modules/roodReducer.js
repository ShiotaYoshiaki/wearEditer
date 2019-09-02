import ItemListReducer from './inventory/itemListReducer';
import HeaderReducer from './common/headerReducer';
import AccountReducer from './common/AccountReducer';
import SideTabReducer from './common/sideTabReducer';
import HistoryReducer from './common/historyReducer';
import EditTagModalReducer from './common/editTagModalReducer';

export default {
    header: HeaderReducer,
    itemList: ItemListReducer,
    account: AccountReducer,
    sideTab: SideTabReducer,
    history: HistoryReducer,
    editTags: EditTagModalReducer,
}
