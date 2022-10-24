import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppDispatchType, RootStateType } from './store';
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
