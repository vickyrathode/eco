/* eslint-disable react/prop-types */
import { Button, Dialog, DialogContent } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                Buy now
            </Button>
            {open && (
                <Dialog
                    onClose={handleOpen}
                    open={open}
                    className="fixed inset-0 z-50 overflow-y-auto"
                >
                    <DialogContent
                        className="bg-white rounded-lg p-4 max-w-md mx-auto w-96"
                        style={{
                            backdropFilter: "blur(58px)", // Apply blur effect to background
                            WebkitBackdropFilter: "blur(8px)", // For Safari
                        }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Enter your details
                        </h3>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Enter your name"
                                className="input-field bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600   placeholder-pink-300"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="address"
                                value={addressInfo.address}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        address: e.target.value,
                                    })
                                }
                                placeholder="Enter your address"
                                className="input-field bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600   placeholder-pink-300"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        pincode: e.target.value,
                                    })
                                }
                                placeholder="Enter your pincode"
                                className="input-field bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600   placeholder-pink-300"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        mobileNumber: e.target.value,
                                    })
                                }
                                placeholder="Enter your mobile number"
                                className="input-field bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600   placeholder-pink-300"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={() => {
                                    handleOpen();
                                    buyNowFunction();
                                }}
                                className="mr-2 px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                Confirm
                            </Button>
                           
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default BuyNowModal;
