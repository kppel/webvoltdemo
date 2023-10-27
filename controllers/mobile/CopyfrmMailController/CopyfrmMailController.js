define(function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        previosAcc: null,
        isClosed: false,
        setData: function() {
            //this.view.lblHeading.text = "Behind The Scene";
            this.view.sgmtAPI.removeAll();
            this.view.sgmtAPI.isVisible = true;
            this.view.sgmtAPI.widgetDataMap = {
                lblNameOfAPI: "APIName2"
            };
          	var data = [{
              dataId1:"Cc",
              dataId2:"Bcc"
            }]
            this.view.sgmtAPI.setData(data);
        },
        onRowClick: function() {
            this.showAccord("flxAcc1");
            var data = this.view.sgmtAPI.selectedRowItems[0];
            this.animateDescriptionScreen(0, data.APIName, this.setUIAfterAnimation);
            this.populateData(data);
        },
      	onRowClickBcc: function() {
            this.showAccordBcc("flxAccBcc");
            var data = this.view.sgmtAPIBcc.selectedRowItems[0];
            this.animateDescriptionScreen(0, data.APIName, this.setUIAfterAnimation);
            this.populateData(data);
        },

        setUIAfterAnimation: function(left, headerText) {
            /*if (left === 100) {
                this.view.flexClickBack.setVisibility(false);
                this.view.lblHeading.text = "Behind The Scene";
            } else {
                this.view.flexClickBack.setVisibility(true);
                this.view.lblHeading.text = headerText;
            }
            */
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        animateDescriptionScreen: function(left, headerText, callbackFunction) {
            var controllerScope = this;
            controllerScope.view.flxFullScreen.animate(
                kony.ui.createAnimation({
                    100: {
                        left: left + "%",
                        "stepConfig": {}
                    }
                }), {
                    delay: 0,
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: 0.1
                }, {
                    animationEnd: function() {
                        /*if (left === 0) {
                            controllerScope.view.flexClickBack.setVisibility(true);
                            controllerScope.view.lblHeading.text = headerText;
                        } else {
                            controllerScope.view.flexClickBack.setVisibility(false);
                            controllerScope.view.lblHeading.text = "Behind The Scenes";
                        }
						*/
                    }
                });
        },

        populateData: function(data) {
            //this.view.rchDesc1.text = data.Description;
            //this.view.rchDesc2.text = data.CodeSnippet;
            //this.view.rchDesc3.text = data.DocLink;
        },

        showAccord: function(id) {
            id = id.split("flxAcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flxScrollCc" + this.previosAcc].isVisible = false;
                this.view["flxScrollCc" + id].isVisible = true;
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordian" + id].src == "chevrondown.png") {
                    this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeSelected";
                    this.view["btnAccordian" + id].src = "chevron.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeUnselected";
                    this.view["flxScrollCc" + this.previosAcc].isVisible = true;
                    this.view["flxScrollCc" + id].isVisible = false;
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                    this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                    this.view["flxScrollCc" + this.previosAcc].isVisible = false;
                    this.view["flxScrollCc" + id].isVisible = true;
                    this.previosAcc = id;
                }
            } else {
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flxScrollCc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
      showAccordBcc: function(id) {
            id = id.split("flxAccBcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordianBcc" + this.previosAcc].src = "chevron.png";
                this.view["lblAccordianBcc" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                //this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordianBcc" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flxScrollBcc" + this.previosAcc].isVisible = false;
                this.view["flxScrollBcc" + id].isVisible = true;
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordianBcc" + id].src == "chevrondown.png") {
                    //this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["lblAccordianBcc" + this.previosAcc].skin = "sknLabelKnowledgeSelected";
                    this.view["btnAccordianBcc" + id].src = "chevron.png";
                    this.view["lblAccordianBcc" + id].skin = "sknLabelKnowledgeUnselected";
                    this.view["flxScrollBcc" + this.previosAcc].isVisible = true;
                    this.view["flxScrollBcc" + id].isVisible = false;
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordianBcc" + this.previosAcc].src = "chevron.png";
                    this.view["lblAccordianBcc" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                    //this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["lblAccordianBcc" + id].skin = "sknLabelKnowledgeSelected";
                    this.view["flxScrollBcc" + this.previosAcc].isVisible = false;
                    this.view["flxScrollBcc" + id].isVisible = true;
                    this.previosAcc = id;
                }
            } else {
                //this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordianBcc" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flxScrollBcc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
        closeWhenDone: function() {
            this.isClosed = true;
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
            this.setUIAfterAnimation(100, "Behind The Scene");
        },
        navigateToPreviousScreen: function() {
            var prevForm = kony.application.getPreviousForm();
            var navObj = new kony.mvc.Navigation(prevForm.id);
            navObj.navigate();
        },

        onClickBack: function() {
            this.resetDescScreen();
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
        },
        resetDescScreen: function() {
            for (i = 1; i <= 3; i++) {
                this.view["btnAccordian" + i].src = "chevron.png";
                this.view["lblAccordian" + i].skin = "sknLabelKnowledgeUnselected";
                this.view["flxScrollCc" + i].isVisible = false;
            }
        },
      	sendMail: function() {
          var self = this;
          var to = self.view.txtTo.text;
          var cc = self.view.txtCc.text;
          var bcc = self.view.txtBcc.text;
          var subject = self.view.txtSubject.text;
          var message = self.view.txtAreaMessage.text;
          var html = self.view.chbHmllContent.selectedKeys === 1 ? true : false;
          var objTo = [];
          var objCc = [];
          var objBcc = [];
          objTo.push(to);
          objCc.push(cc);
          objBcc.push(bcc);
          voltmx.phone.openEmail(objTo, objCc, objBcc, subject, message, html);
    	}
    }
 });