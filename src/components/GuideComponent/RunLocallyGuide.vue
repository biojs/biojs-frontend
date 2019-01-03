<template>
  <v-container class="mt-5">
    <v-card flat style="border-radius: 10px">
      <v-card-title primary-title>
        <v-layout justify-center>
          <div
            row
            wrap
            style="background-color: #f50057; width: fit-content; padding: 2.2mm;  border-radius: 10px;"
          >
            <div style="font-size: 18px" class="text-xs-center white--text">Run BioJS Locally</div>
          </div>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <v-container>
              <v-stepper v-model="e9" vertical>
                <div v-for="(step, index) in steps" :key="index">
                  <v-stepper-step :complete="e9 > 9" :step="index+1">{{ step.title }}</v-stepper-step>
                  <v-stepper-content :step="index+1">
                    <v-card class="mb-2 py-3">
                      <v-card-title primary-title style="color: #009688; font-weight: bold">
                        <v-layout row wrap>
                          <v-flex xs12>{{ step.instruction }}</v-flex>
                        </v-layout>
                      </v-card-title>

                      <v-card-actions>
                        <v-btn dark color="#651fff" @click="loopStepper(e9)">Continue</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-stepper-content>
                </div>
              </v-stepper>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e9: 1,
      steps: [
        {
          title: "Clone GitHub repository",
          instruction: "git clone https://github.com/biojs/biojs-frontend"
        },
        {
          title: "Change directory",
          instruction: "cd biojs-frontend"
        },
        {
          title: "Install dependencies",
          instruction: "npm install || yarn"
        },
        {
          title: "Serve the website",
          instruction: "npm run serve || yarn serve"
        },
        {
          title: "Build the website for production",
          instruction: "npm run build || yarn build"
        },
        {
          title:
            "Build the website for production and view the bundle analyzer report",
          instruction: "npm run build --report || yarn build:report"
        },
        {
          title: "Run unit tests",
          instruction: "npm run unit || yarn unit"
        },
        {
          title: "Run e2e tests",
          instruction: "npm run e2e || yarn e2e"
        },
        {
          title: "Run all tests",
          instruction: "npm test"
        }
      ]
    };
  },
  methods: {
    loopStepper(currentStep) {
      if (currentStep != 9) {
        this.e9 += 1;
      } else {
        this.e9 = 1;
      }
      console.log(currentStep);
    }
  }
};
</script>