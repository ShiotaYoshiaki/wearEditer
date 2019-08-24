import ItemListReducer from './inventory/itemListReducer';
import HeaderReducer from './common/headerReducer';
import AccountReducer from './common/AccountReducer';
import SideTabReducer from './common/sideTabReducer';

export default {
    header: HeaderReducer,
    itemList: ItemListReducer,
    account: AccountReducer,
    sideTab: SideTabReducer,
}
