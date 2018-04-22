import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //默认面板
  find = 'findmsg'

  items=[
    1,2,3,4,5,
    1,2,3,4,5,
    1,2,3,4,5
    // {id:0},
    // {id:1}
  ];
  slide=[
    "assets/imgs/slide1.png",
    "assets/imgs/slide1.png",
    "assets/imgs/slide1.png"
  ]
  //找信息
  findmsg=[
    {src:"../../assets/icon/home-icon1.png",p:'资产包转让'},
    {src:"../../assets/icon/home-icon2.png",p:'债权转让'},
    {src:"../../assets/icon/home-icon3.png",p:'固产转让'},
    {src:"../../assets/icon/home-icon4.png",p:'商业保理'}
  ]
  // 找服务
  findser=[
    {src:"assets/icon/findserve1.png",p:'资产包收购'},
    {src:'assets/icon/findserve2.png',p:'催收机构'},
    {src:'assets/icon/findserve3.png',p:'律师事务所'},
    {src:'assets/icon/findserve4.png',p:'保理公司'}
  ]

  goodmsg=[
    {
      title:'资产包转让',src:'assets/icon/goodmsg1.png',
    places:'地区：',place:'北京',froms:'来源：',from:'银行',
    types:'类型：',type:'抵押',allmoney:'500万',allname:'总金额',
    transmoney:'300万',transname:'转让价'
  },{
      title:'委外催收',src:'assets/icon/goodmsg2.png',
      places:'地区：',place:'北京',froms:'状态：',from:'已诉讼',
      types:'类型：',type:'个人',allmoney:'100',allname:'金额',
      transmoney:"15%-30%",transname:'佣金比例'
    },{
      title:'法律服务',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'民事',allmoney:'咨询',allname:'需求',
      transmoney:""
    },{
      title:'商业保理',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'买方性质：',type:'国企',allmoney:'500万',allname:'合同金额',
      transmoney:""
    },{
      title:'融资借贷',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'方式：',type:'抵押',allmoney:'100万',allname:'金额',
      transmoney:""
    },{
      title:'典当担保',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'典当',allmoney:'500万',allname:'金额',
      transmoney:'',transname:''
    },{
      title:'悬赏信息',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'找人',allmoney:'100万',allname:'金额',
      transmoney:'10%',transname:'回报率'
    },{
      title:'尽职调查',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'法律',allmoney:'企业',allname:'被调查方',
      transmoney:'',transname:''
    },{
      title:'固产转让',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'土地',allmoney:'100万',allname:'转让价',
      transmoney:'',transname:''
    },{
      title:'资产求购',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'土地',allmoney:'个人、企业',allname:'求购方',
      transmoney:'',transname:''
    },{
      title:'债权转让',src:'assets/icon/goodmsg3.png',
      places:'地区：',place:'北京',froms:' ',from:' ',
      types:'类型：',type:'个人',allmoney:'100',allname:'金额',
      transmoney:'90',transname:'转让价'
    }
  ]


  doInfinite(){
    console.log("上拉刷新");
  }
}
