import store from 'src/store';

export const get = () => store.getState().services.session;
