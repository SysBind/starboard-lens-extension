import {Component} from "@k8slens/extensions"
import React from "react"
import {Vulnerability} from "../vulnerability-report";

interface Props {
    vulnerabilities: Vulnerability[];
}

export class VulnerabilitiesList extends React.Component<Props> {

    getTableRow(index: number) {
        const {vulnerabilities} = this.props;
        return (
            <Component.TableRow key={vulnerabilities[index].vulnerabilityID} nowrap>
                <Component.TableCell
                    className="vulnerabilityID">{vulnerabilities[index].vulnerabilityID}</Component.TableCell>
                <Component.TableCell className="severity">{vulnerabilities[index].severity}</Component.TableCell>
                <Component.TableCell className="resource">{vulnerabilities[index].resource}</Component.TableCell>
                <Component.TableCell
                    className="installedVersion">{vulnerabilities[index].installedVersion}</Component.TableCell>
                <Component.TableCell
                    className="fixedVersion">{vulnerabilities[index].fixedVersion}</Component.TableCell>
            </Component.TableRow>
        );
    }

    render() {
        const {vulnerabilities} = this.props
        if (!vulnerabilities.length) {
            return null;
        }

        return (
            <div>
                <Component.DrawerTitle title="Vulnerabilities"/>
                <Component.Table className="box grow">
                    <Component.TableHead>
                        <Component.TableCell className="vulnerabilityID">ID</Component.TableCell>
                        <Component.TableCell className="severity">Severity</Component.TableCell>
                        <Component.TableCell className="resource">Resource</Component.TableCell>
                        <Component.TableCell className="installedVersion">Installed Version</Component.TableCell>
                        <Component.TableCell className="fixedVersion">Fixed Version</Component.TableCell>
                    </Component.TableHead>
                    {
                        vulnerabilities.map((vulnerability, index) => this.getTableRow(index))
                    }
                </Component.Table>
            </div>
        )
    }

}
