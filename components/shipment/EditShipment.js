import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateShipment } from '../../store/actions/ShipmentAction';
import NavBar2 from '../navBar/NavBar2';
import e1 from '../images/e1.jpg';


function EditShipment() {

    const shipment = useSelector(state => state.shipmentReducer.shipment);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shipmentId] = useState(shipment.shipmentId)
    const [shipmentAssets, setShipmentAssets] = useState(shipment.shipmentAssets);
    const [shipmentStatus, setShipmentStatus] = useState(shipment.shipmentStatus);
    const [shipmentSubLocation, setShipmentSubLocation] = useState(shipment.shipmentSubLocation);
    const [shipmentDate, setShipmentDate] = useState(shipment.shipmentDate);
    const [shipmentLocation, setShipmentLocation] = useState(shipment.shipmentLocation);
    const [state, setState] = useState(shipment.state);
    const [country, setCountry] = useState(shipment.country);
    const [fromWarehouseId, setFromWarehouseId] = useState(shipment.fromWarehouseId);
    const [toWarehouseId, setToWarehouseId] = useState(shipment.toWarehouseId);

    const disablePast = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    const handleSubmit = () => {

        const payload = {

            shipmentId: shipmentId,
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

        dispatch(updateShipment(payload));
        alert("Shipmenet updated succesfullt with id " + shipment.shipmentId);
        navigate(-1);
    }

    return (
            <div style={{ backgroundImage: `url(${e1})`, width: "100%", height: "1109px" }}>
                <NavBar2 />
                <h2 style={{fontSize:"40px"}}><i><b>Adding Shipment</b></i></h2><br></br>
                <div className="container" style={{fontSize:"18px"}}>
                <div className='form-group'>
                    <label htmlFor='shipmentId'>ShipmentId </label>
                    <input type="text" className="form-control" name="shipmentId" value={shipmentId} disabled />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipmentAssets'>Shipment Asset </label>
                    <input type="text" className="form-control" name="shipmentAssets" value={shipmentAssets} onChange={ship => setShipmentAssets(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipmentStaus'>Shipment Status </label>
                    <input type="text" className="form-control" name="shipmentStatus" value={shipmentStatus} onChange={ship => setShipmentStatus(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipmentSubLocation'>Shipment Sub-location </label>
                    <input type="text" className="form-control" name="shipmentSubLocation" value={shipmentSubLocation} onChange={ship => setShipmentSubLocation(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipmentDate'>Shipment Date </label>
                    <input type="date" className="form-control" name="shipmentDate" value={shipmentDate} onChange={ship => setShipmentDate(ship.target.value)} min={disablePast()}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='shipmentLocation'>shipment Location </label>
                    <input type="text" className="form-control" name="shipmentLocation" value={shipmentLocation} onChange={ship => setShipmentLocation(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State </label>
                    <input type="text" className="form-control" name="state" value={state} onChange={ship => setState(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='country'>Country </label>
                    <input type="text" className="form-control" name="country" value={country} onChange={ship => setCountry(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='fromWarehouseId'>From warehouseId </label>
                    <input type="text" className="form-control" name="fromWarehouseId" value={fromWarehouseId} onChange={ship => setFromWarehouseId(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='toWarehouseId'>To warehouse Id</label>
                    <input type="text" className="form-control" name="toWarehouseId" value={toWarehouseId} onChange={ship => setToWarehouseId(ship.target.value)} />
                </div><br></br>
                <div >
                    <button style={{ float: "right" }} onClick={handleSubmit} className="btn btn-success">Submit</button>
                    <button style={{ float: "left" }} onClick={() => navigate(-1)} className="btn btn-dark">Back</button>
                </div>
            </div>
        </div>
    )
}

export default EditShipment;