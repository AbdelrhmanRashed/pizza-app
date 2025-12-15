import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { getAddress } from '../../services/apiGeocoding';

// interface Position {
//   latitude: number;
//   longitude: number;
// }

// interface AddressData {
//   locality?: string;
//   city?: string;
//   postcode?: string;
//   countryName?: string;
// }

// interface FetchAddressResult {
//   position: Position;
//   address: string;
// }

/*
function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress(): Promise<FetchAddressResult> {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position: Position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/
interface IUser {
  username: string;
}
const initialState: IUser = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
