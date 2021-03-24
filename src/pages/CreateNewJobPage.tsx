import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import ArrowRightSharp from "@material-ui/icons/ArrowRightSharp";
import makeStyles from "@material-ui/core/styles/makeStyles";

import PageNavigation from "../components/PageNavigation";

import Service from "../types/Service";
import services from "../services/servicesService";
import Scan from "../components/Scan";
import Sticker from "../components/Sticker";
import Photocopy from "../components/Photocopy";
import Lamination from "../components/Lamination";
import TshirtPrinting from "../components/TshirtPrinting";
import RisoDuplo from "../components/RisoDuplo";
import TarpaulinPrinting from "../components/TarpaulinPrinting";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  listItem: {
    marginBottom: 10,
  },
  selected: {
    color: "White",
    backgroundColor: "Black!important",
  },
  unselected: {
    color: "Black",
    backgroundColor: "White!importante",
  },
  submitOrder: {
    color: "White",
    backgroundColor: "#3f51b5!important",
  },
  primaryTextSel: {
    color: "White",
    fontWeight: "bold",
    fontSize: 20,
  },
  secondaryTextSel: {
    color: "White",
    fontSize: 12,
  },
  primaryTextUnsel: {
    color: "Black",
    fontWeight: "bold",
    fontSize: 20,
  },
  secondaryTextUnsel: {
    color: "Black",
    fontSize: 12,
  },
});

interface job {
  services: Service[];
  service: Service;
}

const CreateNewJobPage: React.FC<RouteComponentProps> = ({ ...props }) => {
  const styles = useStyles();
  const [state, setState] = useState<job>({
    services: [],
    service: {},
  });

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data }: { data: Service[] } = await services.getServices();
        data[0].selected = true;
        const service = data[0];

        setState({ services: data, service });
      } catch (error) {}
    };

    getServices();

    // services.getPrices()
    //     .then((result) => {
    //         setState({ ...state, prices: result.data });
    //     });
  }, []);

  const resetSelected = () => {
    let services = [...state.services];
    for (let i = 0; i < services.length; i++) {
      services[i].selected = false;
    }

    setState({ ...state, services });
  };

  const handleSelect = (service: Service) => {
    resetSelected();
    const services = [...state.services];
    const index = services.indexOf(service);
    services[index].selected = true;
    setState({ ...state, services, service });
  };

  const handleSubmit = () => {};

  const handleComplete = () => {};

  const renderSwitch = (param: string) => {
    switch (param) {
      case "scan":
        return (
          <Scan handleSubmit={handleSubmit} handleComplete={handleComplete} />
        );

      case "sticker":
        return (
          <Sticker
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );

      case "photocopy-printing":
        return (
          <Photocopy
            service={{ name: "Photocopy", slug: "photocopy" }}
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );

      case "lamination":
        return (
          <Lamination
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );

      case "t-shirt-printing":
        return (
          <TshirtPrinting
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );

      case "riso-duplo":
        return (
          <RisoDuplo
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );

      case "tarpaulin-printing":
      default:
        return (
          <TarpaulinPrinting
            handleSubmit={handleSubmit}
            handleComplete={handleComplete}
          />
        );
    }
  };

  return (
    <>
      <PageNavigation {...props} />
      <Container maxWidth="md" style={{ marginTop: 70, textAlign: "center" }}>
        <Grid container>
          <Grid container item sm={4}>
            <List component="nav" aria-label="job menu" className={styles.root}>
              {state.services &&
                state.services.map((service) => (
                  <Box boxShadow={2} key={service.slug}>
                    <ListItem
                      button
                      onClick={() => handleSelect(service)}
                      className={styles.listItem}
                      selected={service.selected}
                      classes={{
                        selected: service.selected
                          ? styles.selected
                          : styles.unselected,
                      }}
                    >
                      <ListItemText
                        primary={service.name}
                        secondary={
                          service.totalAmount
                            ? `Total: ₱ ${service.totalAmount.toFixed(2)}`
                            : " - "
                        }
                        classes={{
                          primary: service.selected
                            ? styles.primaryTextSel
                            : styles.primaryTextUnsel,
                          secondary: service.selected
                            ? styles.secondaryTextSel
                            : styles.secondaryTextUnsel,
                        }}
                      />
                      <ListItemIcon>
                        {service.selected && (
                          <ArrowRightSharp style={{ color: "white" }} />
                        )}
                      </ListItemIcon>
                    </ListItem>
                  </Box>
                ))}
            </List>
          </Grid>
          <Grid item sm={8} style={{ padding: 10, textAlign: "left" }}>
            {state.service && renderSwitch(state.service.slug!)}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateNewJobPage;
