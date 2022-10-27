import { createSlice, createSelector } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import type {IFNeedlePlace} from "../../interfaces/needlePlace"
import { RootStateType } from "../../redux";
import {fakeNeedlePlace} from "../../fake/needlePlace"
interface IFStateType {
  data: Partial<IFNeedlePlace>[],
  filter: Partial<IFNeedlePlace>,
  needlePlaceEditing: number
}
const initialState:IFStateType = {
  data: fakeNeedlePlace,
  filter: {
    needlePlace: "",
    address: ""
  },
  needlePlaceEditing: 0
}
const needlePlaceSlice = createSlice({
  name: "needlePlaceSlice",
  initialState,
  reducers: {
    updateNeedlePlaceData(state, action: PayloadAction<Partial<IFNeedlePlace>>){
      let needleItemChanging = state.data.find(item=>item.id ===action.payload.id)
      if(needleItemChanging){
        needleItemChanging.address = action.payload.address
        needleItemChanging.host = action.payload.host
        needleItemChanging.needlePlace = action.payload.needlePlace
        needleItemChanging.tableNumber = action.payload.tableNumber
      }
    },
    updateNeedlePlaceFilter(state, action: PayloadAction<Partial<IFNeedlePlace>>){
      state.filter.needlePlace = action.payload.needlePlace
      state.filter.address = action.payload.address
    },
    updateNeedlePlaceEditing(state, action:PayloadAction<number>){
      state.needlePlaceEditing = action.payload
    }
  }
})
export default needlePlaceSlice.reducer
export const {updateNeedlePlaceData, updateNeedlePlaceFilter, updateNeedlePlaceEditing} = needlePlaceSlice.actions
export const needlePlaceDataSelector = (state:RootStateType) =>state.needlePlace.data
export const needlePlaceFilterSelector = (state:RootStateType) => state.needlePlace.filter
export const needlePlaceEditingSelector = (state:RootStateType) => state.needlePlace.needlePlaceEditing
export const needlePlaceDataRemainingSelector = createSelector(needlePlaceDataSelector, needlePlaceFilterSelector,(needlePlace:Partial<IFNeedlePlace>[], filter:Partial<IFNeedlePlace> )=>{
  return needlePlace.filter(item=>item.needlePlace?.includes(filter?.needlePlace as string) && item.address?.includes(filter?.address as string))
})
export const needlePlaceEditingItemSelector = (state: RootStateType) => state.needlePlace.data[state.needlePlace.needlePlaceEditing]
