import React, { useEffect, useState } from "react";
import DashboardModal from "./DashboardModal";
import TableModal from "./TableModal";
import { connect } from "react-redux";
import User from "./User";

import { fetchUsers } from "../../reducers/userActions";

function UsersDashboard(props) {
  useEffect(() => {
    props.dispatch(fetchUsers());
  });

  return (
    <DashboardModal>
      <TableModal>
        {props.users.length === 0 ? (
          <tr>
            <th>lastName</th>
            <th>firstName</th>
            <th>address</th>
            <th>telephone</th>
            <th>#</th>
          </tr>
        ) : (
          <>
            <tr>
              <th>lastName</th>
              <th>firstName</th>
              <th>address</th>
              <th>telephone</th>
              <th>#</th>
            </tr>
            {props.users.map((item, index) => (
              <User key={index} user={item} />
            ))}
          </>
        )}
      </TableModal>
    </DashboardModal>
  );
}
const mapStatToProps = (state) => {
  return {
    users: state.userReducer.users,
    items: state.cartReducer.items,
  };
};
export default connect(mapStatToProps)(UsersDashboard);
