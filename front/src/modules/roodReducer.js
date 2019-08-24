import ItemListReducer from './inventory/itemListReducer';
import HeaderReducer from './common/headerReducer';
import AccountReducer from './common/AccountReducer';

export default {
    header: HeaderReducer,
    itemList: ItemListReducer,
    account: AccountReducer,
}
