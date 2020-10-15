import { connect } from 'react-redux';
import AccountsPage from '../../components/pages/accountsPage';
import {
  createAccount, fetchAccounts, deleteAccount, updateAccount,
} from '../../reducers/accounts/actions';
import { showModal } from '../../reducers/modal/actions';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loading: state.accounts.loading,
  error: state.accounts.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: () => dispatch(fetchAccounts()),
  createAccount: (accountTitle) => dispatch(createAccount(accountTitle)),
  deleteAccount: (account) => dispatch(deleteAccount(account)),
  updateAccount: (account) => dispatch(updateAccount(account)),
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
