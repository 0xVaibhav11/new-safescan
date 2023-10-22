"use client";

import axios from "axios";

export async function DataThroughAddress(address: string) {
  try {
    console.log(address);
    const data = await axios.get(`
        https://api.web3.bio/profile/${address}`);
    const response = data.data;
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function DataThroughENS(identity: string) {
  try {
    const data = await axios.get(`
          https://api.web3.bio/profile/ens/${identity}`);

    const response = data.data;
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function DataThroughLens(identity: string) {
  try {
    const data = await axios.get(`
          https://api.web3.bio/profile/lens/${identity}`);
    const response = data.data;
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function DataThroughFarcaster(identity: string) {
  try {
    const data = await axios.get(`
          https://api.web3.bio/profile/farcaster${identity}`);
    const response = data.data;
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function DataThroughDotbit(identity: string) {
  try {
    const data = await axios.get(`
          https://api.web3.bio/profile/dotbit${identity}`);
    const response = data.data;
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function DataThroughTwitter(identity: string) {
  try {
    const data = await axios.get(`
            https://api.web3.bio/profile/${identity}`);
    const response = data.data;
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}
