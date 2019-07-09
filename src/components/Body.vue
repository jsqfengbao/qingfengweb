<template>
  <div id="wrapper-container">
    <div class="container object">
      <div id="main-container-image">
        <section class="work" v-for="img in qingfengImg" :key="img.id">
          <figure class="white">
            <a href="details.html">
              <img :src="img.imgLogUrl" alt="" />
              <dl>
                <dt>{{img.name}}</dt>
                <dd>{{img.imgDesc}}</dd>
              </dl>
            </a>
          </figure>
        </section>
      </div>
    </div>

    <div id="wrapper-oldnew">
      <div class="oldnew">
        <div class="wrapper-oldnew-prev">
          <div id="oldnew-prev" v-on:click="prev"></div>
        </div>
        <div class="wrapper-oldnew-next">
          <div id="oldnew-next" v-on:click="next"></div>
        </div>
      </div>
    </div>

    <div id="wrapper-thank">
      <div class="thank">
        <div class="thank-text">pl<span style="letter-spacing:-5px;">a</span>tz</div>
      </div>
    </div>

    <div id="main-container-footer">
      <div class="container-footer">

        <div id="row-1f">
          <div class="text-row-1f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">What is Platz</span><br>Platz is a blog showcasing hand-picked free themes, design stuff, free fonts and other resources for web designers.</div>
        </div>

        <div id="row-2f">
          <div class="text-row-2f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">How does it work</span><br>Platz offers you all the latest freebies found all over the fourth corners without to pay.</div>
        </div>

        <div id="row-3f">
          <div class="text-row-3f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">Get in touch!</span><br>Subscribe our RSS or follow us on Facebook, Google+, Pinterest or Dribbble to keep updated.</div>
        </div>

        <div id="row-4f">
          <div class="text-row-4f"><span style="font-weight:600;font-size:15px;color:#666;line-height:250%;text-transform:uppercase;letter-spacing:1.5px;">Newsletter</span><br>You will be informed monthly about the latest content avalaible.</div>

          <div id="main_tip_newsletter">
            <form>
              <input type="text" name="newsletter" id="tip_newsletter_input" list="newsletter" autocomplete=off required>
            </form>
          </div>
        </div>

      </div>
    </div>

    <div id="wrapper-copyright">
      <div class="copyright">
        <div class="copy-text object">Copyright &copy; 2016.Company name All rights reserved.</div>

        <div class="wrapper-navbouton">
          <div class="google object">g</div>
          <div class="facebook object">f</div>
          <div class="linkin object">i</div>
          <div class="dribbble object">d</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'Body',
  data () {
    return {
      qingfengImg: [],
      page: 1,
      limit: 5,
      pageSize: null,
      totalCount: null,
      totalPage: null
    }
  },
  created () {
    this.getDefaultData()
  },
  methods: {
    getDefaultData () {
      axios.get('/ad/qingfengimg/list', {
        params: {
          'page': this.page,
          'limit': this.limit
        }
      }).then((res) => {
        if (res.data.code === 0) {
          return res.data.page
        }
      }).then((res) => {
        this.qingfengImg = res.list
        this.totalCount = res.totalCount
        this.totalPage = res.totalPage
      })
    },
    next () {
      if (this.page === this.totalPage) {
        return null
      } else {
        this.page = this.page + 1
        this.getDefaultData()
      }
    },
    prev () {
      if (this.page === 1) {
        return null
      } else {
        this.page -= this.page - 1
        this.getDefaultData()
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
