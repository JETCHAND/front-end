import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewShipment } from '../../store/actions/ShipmentAction';
import l2 from '../images/l1.webp';
import NavBar from '../navBar/NavBar';


function CreateShipment() {

    const [shipmentAssets, setShipmentAssets] = useState("");
    const [shipmentStatus, setShipmentStatus] = useState("");
    const [shipmentSubLocation, setShipmentSubLocation] = useState("");
    const [shipmentDate, setShipmentDate] = useState("");
    const [shipmentLocation, setShipmentLocation] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [fromWarehouseId, setFromWarehouseId] = useState("");
    const [toWarehouseId, setToWarehouseId] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const disablePast = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }


    // eslint-disable-next-line
    const shipment = useSelector(state => state.shipmentReducer.newShipment);

    const handleSubmit = () => {

        let errors = {};

        if (!shipmentAssets) {
            errors['shipmentAssetNameError'] = "*Ship Asset name is requird!";
        }
        if (!shipmentStatus) {
            errors['shipmentStatusNameError'] = "*Shipment status is requird!";
        }
        if (!shipmentLocation) {
            errors['shipmentLocationNameError'] = "*Shipment location is requird!";
        }
        if (!shipmentDate) {
            errors['shipmentDateError'] = "*Shipment Date is Required!";
        }

        if (!state) {
            errors['shipmentStateNameError'] = "*Shipment state is requird!";
        }

        if (!country) {
            errors['shipmentCountryNameError'] = "*Shipment country is requird!";
        }

        if (!fromWarehouseId) {
            errors['shipmentFromWarehouseIdNameError'] = "*from warehouseId is requird!";
        }

        if (!toWarehouseId) {
            errors['shipmentToWarehouseIdNameError'] = "*to warehouseId is requird!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                shipmentAssets: shipmentAssets,
                shipmentStatus: shipmentStatus,
                shipmentSubLocation: shipmentSubLocation,
                shipmentDate: shipmentDate,
                shipmentLocation: shipmentLocation,
                state: state,
                country: country,
                fromWarehouseId: fromWarehouseId,
                toWarehouseId: toWarehouseId
            }

            dispatch(createNewShipment(payload));
            // alert("Shipment is saved with id : " + newShipment.shipId)
            navigate(-1);
        }
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${l2})`, width: "100%", height: "1150px" }}>
                <NavBar />
                <div className="container" style={{ color: "white" }}>
                    <h2 style={{ fontSize: "40px" }}><i>Adding Shipment</i></h2><br></br>
                    <div style={{ fontSize: "20px" }}>
                        <div className='form-group'>
                            <label htmlFor='shipmentAssets'>Shipment Asset </label>
                            <input type="text" className="form-control" name="shipmentAssets" value={shipmentAssets} onChange={ship => setShipmentAssets(ship.target.value)} autoFocus />
                            {
                                formErrors.shipmentAssetNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentAssetNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='shipmentStaus'>Shipment Status </label>
                            <input type="text" className="form-control" name="shipmentStatus" value={shipmentStatus} onChange={ship => setShipmentStatus(ship.target.value)} />
                            {
                                formErrors.shipmentStatusNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentStatusNameError}</div>

                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='shipmentSubLocation'>Shipment Sub-location </label>
                            <input type="text" className="form-control" name="shipmentSubLocation" value={shipmentSubLocation} onChange={ship => setShipmentSubLocation(ship.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='shipmentDate'>Shipment Date </label>
                            <input type="date" className="form-control" name="shipmentDate" value={shipmentDate} onChange={ship => setShipmentDate(ship.target.value)} min={disablePast()} />
                            {
                                formErrors.shipmentDateError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentDateError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='shipmentLocation'>Location </label>
                            <input type="text" className="form-control" name="shipmentLocation" value={shipmentLocation} onChange={ship => setShipmentLocation(ship.target.value)} />
                            {
                                formErrors.shipmentLocationNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentLocationNameError}</div>

                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='state'>State </label>
                            <input type="text" className="form-control" name="state" value={state} onChange={ship => setState(ship.target.value)} />
                            {
                                formErrors.shipmentStateNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentStateNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='country'>Country </label>
                            <input type="text" className="form-control" name="country" value={country} onChange={ship => setCountry(ship.target.value)} />
                            {
                                formErrors.shipmentCountryNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentCountryNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='fromWarehouseId'>From warehouseId </label>
                            <input type="text" className="form-control" name="fromWarehouseId" value={fromWarehouseId} onChange={ship => setFromWarehouseId(ship.target.value)} />
                            {
                                formErrors.shipmentFromWarehouseIdNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentFromWarehouseIdNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='toWarehouseId'>To warehouse Id</label>
                            <input type="text" className="form-control" name="toWarehouseId" value={toWarehouseId} onChange={ship => setToWarehouseId(ship.target.value)} />
                            {
                                formErrors.shipmentToWarehouseIdNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipmentToWarehouseIdNameError}</div>
                            }
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-success" style={{ float: "right" }} onClick={handleSubmit}>Submit</button>
                        <button className="btn btn-secondary" style={{ float: "left" }} onClick={() => (navigate("/shipment/all"))}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateShipment;