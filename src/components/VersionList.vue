<template>
<div>
	<h1 v-if="totalCount!=0">Success percent: {{(isSameCount/totalCount).toFixed(2)*100}}%</h1>
	<h4>Status: {{status}}</h4>
	<br>
	<table border="1">
		<tr>
			<th>Component</th>
			<th>Version (biojs.io)</th>
			<th>Version (new)</th>
			<th>Same?</th>
		</tr>
		<tr v-for="(data, index) in tableData" :key="index">
			<td>{{data.name}}</td>
			<td>{{data.oldVersion}}</td>
			<td>{{data.newVersion}}</td>
			<td>{{data.isSame}}</td>
		</tr>
	</table>
</div>
</template>
<script>
/*eslint-disable*/
import axios from "axios";
export default {
  data() {
    return {
      all_components: [],
      tableData: [],
      isSameCount: 0,
      totalCount: 0,
      status: "Loading data"
    };
  },
  mounted() {
    axios({ method: "GET", url: "http://139.59.93.32/api/all/" }).then(
      result => {
        this.all_components = result.data.all_components;
        this.all_components.map((component, index) => {
          let componentObj = {};
          componentObj["name"] = component.name;
          axios({
            method: "GET",
            url: "http://139.59.93.32/api/details/" + component.url_name
          }).then(
            result => {
              componentObj["newVersion"] = result.data.details.version;
              axios({
                method: "GET",
                url: "http://workmen.biojs.net/detail/" + component.name
              })
                .then(result => {
                  if (!result.data.error) {
                    componentObj["oldVersion"] =
                      result.data["dist-tags"].latest;
                    if (
                      componentObj["newVersion"] === componentObj["oldVersion"]
                    ) {
                      componentObj["isSame"] = true;
                      this.totalCount++;
                      this.isSameCount++;
                      if (index === this.all_components.length - 1)
                        this.status = "Complete!";
                    } else {
                      componentObj["isSame"] = false;
                      this.totalCount++;
                      if (index === this.all_components.length - 1)
                        this.status = "Complete!";
                    }
                  } else {
                    componentObj["oldVersion"] = "Not found!";
                    componentObj["isSame"] = "Error!";
                  }
                  this.tableData.push(componentObj);
                })
                .catch(error => {
                  if (error.response.status === 404) {
                    componentObj["oldVersion"] = "Not found!";
                    componentObj["isSame"] = "Error!";
                    if (index === this.all_components.length - 1)
                      this.status = "Complete!";
                  } else {
                    componentObj["oldVersion"] = "Error!";
                    componentObj["isSame"] = "Error!";
                    if (index === this.all_components.length - 1)
                      this.status = "Complete!";
                    console.error(error.response.status);
                  }
                });
            },
            error => {
              console.error(error);
            }
          );
        });
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>
<style lang="scss" scoped>
</style>
