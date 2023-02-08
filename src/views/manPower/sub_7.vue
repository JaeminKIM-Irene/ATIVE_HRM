<template>
    <SideBar2 />
    <div class="sub-container">
        <img class="sub-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub-T1">계열사 내 IT 인력현황</div>
    </div>
    <div class="sub-container2">
        <button class="download-btn">엑셀다운로드</button>
        <div class="sub-sub-container">
            <div class="input-container">
                <label style="display:flex">근무형태</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="work" style="display:flex">주직무</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="search">검색</label>
                <input id="search" type="text" placeholder="직책/이름/이메일/내선/휴대폰/업무요약"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub-container3">
        <table class="sub-table">
            <colgroup>
                <col width="15%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="5%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="10%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">회사명</th>
                    <th colspan="2">정규직</th>
                    <th colspan="6">비정규직</th>
                    <th rowspan="2" class="main-pink">미분류</th>
                    <th rowspan="2">합계</th>
                </tr>
                <tr>
                    <th>임원</th>
                    <th>정규직</th>
                    <th>계약(일반)</th>
                    <th>계약(전문)</th>
                    <th>계약(무기)</th>
                    <th>파견</th>
                    <th>도급</th>
                    <th>소계</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>NICE 홀딩스</td>
                    <td>1</td>
                    <td>11</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>9</td>
                    <td>19</td>
                    <td>19</td>
                    <td>0</td>
                    <td>31</td>
                </tr>
            </tbody>
        </table>
        <div class="list-num">[IT인력 수:31]</div>
        <table class="sub-table2">
            <colgroup>
                <col width="12%">
                <col width="12%">
                <col width="7%">
                <col width="7%">
                <col width="6%">
                <col width="6%">
                <col width="11%">
                <col width="11%">
                <col width="9%">
                <col width="9%">
                <col width="9%">
            </colgroup>
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>부서명</th>
                    <th>이름</th>
                    <th>직급</th>
                    <th>근무형태</th>
                    <th>재직형태</th>
                    <th>주직무</th>
                    <th>부직무</th>
                    <th>IT정보 미반영</th>
                    <th>IT경력시작일</th>
                    <th>입사일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.comp}}</td>
                    <td>{{list.partName}}</td>
                    <td><router-link to="/man/sub5">{{list.name}}</router-link></td>
                    <td>{{list.position}}</td>
                    <td>{{list.type}}</td>
                    <td>{{list.status}}</td>
                    <td>{{list.main}}</td>
                    <td>{{list.sub}}</td>
                    <td>{{list.it}}</td>
                    <td>{{list.career}}</td>
                    <td>{{list.start}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-btn-container">
            <button class="table-page-btn" :disabled="pageNum === 0" @click="firstPage">
                <vue-feather type="chevrons-left"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum === 0" @click="prevPage">
                <vue-feather type="chevron-left"/>
            </button>
            <div class="page-numbers">
                <button class="page-number" :class="{ active: paging-1 === pageNum}" v-for="(paging, index) in pages" :key="index" @click="toPage(paging-1)">
                    {{paging}}
                </button>
            </div>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1" @click="nextPage">
                <vue-feather type="chevron-right"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1"  @click="lastPage">
                <vue-feather type="chevrons-right"/>
            </button>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'
    import SideBar2 from '../../components/SideBar2.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect,
            SideBar2
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                listArray: [
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                    {comp: 'NICE 홀딩스', partName: "NICE 홀딩스 IT본부", name:"이현석", position:"대표이사", type:"정규직" ,status:"재직", main:"기획>총괄", sub:"기획>총괄", it:"", career:"1999-12-01", start:"2011-04-16"},
                ],
            }
        },
        props: {
        },
        methods: {
            firstPage () {
                this.pageNum = 0;
            },
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            },
            lastPage () {
                this.pageNum = this.pageCount -1;
            },
            toPage (page) {
                this.pageNum = page;
            },
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) page += 1;
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                        end = start + this.pageSize;
                return this.listArray.slice(start, end);
            },
            pages () {
                const list=[];
                let startpage = parseInt(this.pageNum/3)*3+1;
                let lastPage = parseInt(this.pageNum / 3) * 3 + 3;
                let endpage = lastPage <= this.pageCount ? lastPage : this.pageCount;

                for(let index = startpage; index <= endpage; index+=1) {
                    list.push(index);
                }

                return list
            }
        }
    }
</script>

<style src="../../css/ManPower/sub_7.css" scoped />